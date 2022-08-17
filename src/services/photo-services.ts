import { db } from '../db/db';
import {Photo} from '../models/photo'


interface PhotoService{
    updateLikes(id:string, inc:number): Promise<Photo>;
    createPhoto(photo:Photo): Promise<string>;
    createComment(id:string, comment:string): Promise<Photo>;
    getAllPhoto(): Promise<Photo[]>
}

const photoCollections = db.collection<Photo>("photos")

export const getAllPhotos = async (): Promise<Photo[]> =>{
    const photos = await photoCollections.find().toArray()

    return photos;
};