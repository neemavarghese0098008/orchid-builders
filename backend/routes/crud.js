import {Router} from 'express';
import slugify from 'slugify';
import {Op} from 'sequelize';
import {requireAuth} from '../middleware/auth.js';
import {ProjectCategory} from '../models/index.js';

const plural=model=>({ProjectCategory:'project-categories',OngoingProject:'ongoing-projects',GalleryItem:'gallery',ContactSubmission:'contact-submissions',Article:'articles',Testimonial:'testimonials',Project:'projects'}[model.name]);
const activeStatuses=new Set(['Project','OngoingProject','Testimonial','GalleryItem','ProjectCategory']);
export function crudRouter(Model,{searchable=[]}={}){
 const router=Router();
 const include=Object.values(Model.associations||{}).filter(a=>a.as==='images'||a.as==='category').map(a=>({model:a.target,as:a.as}));
 router.get('/',(req,res,next)=>req.query.all==='true'?requireAuth(req,res,next):next(),async(req,res,next)=>{try{
  const where={};if(Model.rawAttributes.status){if(req.query.all==='true')where.status={[Op.ne]:null};else if(activeStatuses.has(Model.name))where.status='active';else if(Model.name==='Article')where.status='published';}
  const term=String(req.query.search||'').trim();if(term&&searchable.length)where[Op.or]=searchable.map(key=>({[key]:{[Op.like]:`%${term}%`}}));
  const limit=Math.min(Math.max(Number(req.query.limit)||100,1),200);const offset=Math.max(Number(req.query.offset)||0,0);
  const result=await Model.findAndCountAll({where,include:include.length?include:undefined,distinct:true,order:[['updatedAt','DESC']],limit,offset});
  res.json({data:result.rows,total:result.count,limit,offset});
 }catch(e){next(e);}});
 router.get('/:id',async(req,res,next)=>{try{const row=await Model.findByPk(req.params.id,{include:include.length?include:undefined});if(!row||activeStatuses.has(Model.name)&&row.status!=='active')return res.status(404).json({message:'Record not found'});res.json({data:row});}catch(e){next(e);}});
 router.post('/',requireAuth,async(req,res,next)=>{try{const data={...req.body};const key=data.projectName?'projectName':data.name?'name':data.title?'title':null;if(key&&!data.slug)data.slug=slugify(data[key],{lower:true,strict:true})+'-'+Date.now().toString(36);
  if(Model===ProjectCategory)data.slug=data.slug||slugify(data.name,{lower:true,strict:true});
  if(Model.name==='Project'){const type=String(data.type||data.categoryName||'').trim();delete data.type;delete data.categoryName;delete data.ProjectCategoryId;data.categoryId=null;if(type){const category=await ProjectCategory.findOne({where:{name:type,status:'active'}});if(!category)return res.status(400).json({message:'Choose a valid project type'});data.categoryId=category.id;}}
  res.status(201).json({data:await Model.create(data)});
 }catch(e){next(e);}});
 router.put('/:id',requireAuth,async(req,res,next)=>{try{const row=await Model.findByPk(req.params.id);if(!row)return res.status(404).json({message:'Record not found'});const data={...req.body};if(Model.name==='Project'&&('type'in data||'categoryName'in data)){const type=String(data.type||data.categoryName||'').trim();delete data.type;delete data.categoryName;delete data.ProjectCategoryId;data.categoryId=null;if(type){const category=await ProjectCategory.findOne({where:{name:type,status:'active'}});if(!category)return res.status(400).json({message:'Choose a valid project type'});data.categoryId=category.id;}}await row.update(data);res.json({data:row});}catch(e){next(e);}});
 router.delete('/:id',requireAuth,async(req,res,next)=>{try{const row=await Model.findByPk(req.params.id);if(!row)return res.status(404).json({message:'Record not found'});await row.destroy();res.json({message:'Deleted'});}catch(e){next(e);}});
 return {path:plural(Model),router};
}
