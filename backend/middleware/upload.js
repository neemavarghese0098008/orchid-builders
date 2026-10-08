import multer from 'multer';import path from 'node:path';import fs from 'node:fs';import crypto from 'node:crypto';
const root=path.resolve(process.env.UPLOAD_DIR||'uploads');
const storage=multer.diskStorage({destination(req,file,cb){const area=String(req.params.resource||'misc').replace(/[^a-z-]/gi,'');const folder=path.join(root,area);fs.mkdirSync(folder,{recursive:true});cb(null,folder);},filename(req,file,cb){cb(null,crypto.randomUUID()+path.extname(file.originalname).toLowerCase());}});
export const upload=multer({storage,limits:{fileSize:8*1024*1024,files:100},fileFilter(req,file,cb){const valid=/^image\/(jpeg|png|webp|gif)$/.test(file.mimetype);cb(valid?null:new Error('Upload only JPEG, PNG, WebP or GIF images'),valid);}});
