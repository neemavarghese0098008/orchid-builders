import {DataTypes} from 'sequelize';
import {sequelize} from '../models/index.js';

export async function migrateCmsSchema(){
 const qi=sequelize.getQueryInterface();
 const projectColumns=await qi.describeTable('projects');
 if(!projectColumns.description)await qi.addColumn('projects','description',{type:DataTypes.TEXT,allowNull:true});
 if(!projectColumns.categoryId){await qi.addColumn('projects','categoryId',{type:DataTypes.INTEGER,allowNull:true,references:{model:'projectcategories',key:'id'},onUpdate:'CASCADE',onDelete:'SET NULL'});}
 if(projectColumns.ProjectCategoryId)await sequelize.query('UPDATE projects SET categoryId = ProjectCategoryId WHERE categoryId IS NULL AND ProjectCategoryId IS NOT NULL');
 const statusTables=['projects','ongoingprojects','testimonials','galleryitems'];
 for(const table of statusTables){
  const columns=await qi.describeTable(table);
  if(!columns.status)continue;
  await qi.changeColumn(table,'status',{type:DataTypes.STRING(16),allowNull:false,defaultValue:'active'});
  await sequelize.query(`UPDATE \`${table}\` SET status = CASE WHEN LOWER(status) IN ('inactive','draft','archived') THEN 'inactive' ELSE 'active' END`);
  await qi.changeColumn(table,'status',{type:DataTypes.ENUM('active','inactive'),allowNull:false,defaultValue:'active'});
 }
 const gallery=await qi.describeTable('galleryitems');
 if(gallery.category){
  await qi.changeColumn('galleryitems','category',{type:DataTypes.STRING(32),allowNull:false});
  await sequelize.query("UPDATE galleryitems SET category = CASE WHEN LOWER(category) = 'interior' THEN 'Interiors' WHEN LOWER(category) = 'exterior' THEN 'Exteriors' WHEN LOWER(category) IN ('onsite','on site','sites') THEN 'Onsite' WHEN LOWER(category) = 'architecture' THEN 'Architecture' ELSE category END");
  await qi.changeColumn('galleryitems','category',{type:DataTypes.ENUM('Interiors','Exteriors','Architecture','Onsite'),allowNull:false});
 }
}

