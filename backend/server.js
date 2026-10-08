import 'dotenv/config';
import bcrypt from 'bcryptjs';
import app from './app.js';
import {sequelize,Admin,ProjectCategory} from './models/index.js';
import {migrateCmsSchema} from './config/migrations.js';
async function initialize(){
 if(!process.env.JWT_SECRET||process.env.JWT_SECRET.length<32)throw new Error('Set JWT_SECRET to a random value of at least 32 characters.');
 if(process.env.NODE_ENV==='production'){
  const missing=['DB_HOST','DB_NAME','DB_USER','DB_PASSWORD'].filter(name=>!process.env[name]);
  if(missing.length)throw new Error('Production database configuration is incomplete: '+missing.join(', '));
  if(process.env.DB_NAME!=='orchidbuilders_orchid_builders')throw new Error('Production DB_NAME must target the existing Orchid Builders database.');
 }
 await sequelize.authenticate();await sequelize.sync();await migrateCmsSchema();
 if(process.env.ADMIN_EMAIL&&process.env.ADMIN_PASSWORD){const email=process.env.ADMIN_EMAIL.toLowerCase();if(!await Admin.findOne({where:{email}}))await Admin.create({email,password:await bcrypt.hash(process.env.ADMIN_PASSWORD,12),role:'Admin'});}
 for(const name of ['Luxury Villas','Modern Homes','Traditional Kerala Homes','Commercial Projects','Interiors']){const slug=name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');await ProjectCategory.findOrCreate({where:{slug},defaults:{name,slug,status:'active'}});}
 const port=Number(process.env.PORT||5000);app.listen(port,()=>console.log('Orchid API listening on '+port));
}
initialize().catch(error=>{console.error('Backend startup failed:',error.message);process.exit(1);});

