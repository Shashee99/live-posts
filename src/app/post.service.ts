import {EventEmitter, Injectable} from "@angular/core";
import {Post} from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{
  listChangedEvent:EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    // new Post(
    //   'Nature',
    //   'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
    //   'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
    //   'test@test.com',
    //   new Date(),
    //   5
    // ),
    // new Post(
    //   'Hampi',
    //   'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.',
    //   'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hampi_karnataka.jpg/800px-Hampi_karnataka.jpg',
    //   'test@test.com',
    //   new Date(),
    //   2
    // ),
    // new Post(
    //   'Araku Valley',
    //   `Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.`,
    //   'https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg',
    //   'test@test.com',
    //   new Date(),
    //   1
    // ),
  ];
  constructor() {

  }
  getPosts(){
    return this.listOfPosts;
  }

  deletePost(index: number | undefined){
    if (typeof index === "number") {
      this.listOfPosts.splice(index, 1);
    }
  }

  addPost(post:Post){
    this.listOfPosts.push(post)
  }

  updatePost(index:number,post:Post){
    this.listOfPosts[index]=post
  }

  getPost(index:number){
    return this.listOfPosts[index]
  }

  likePost(index: number | undefined){

   // @ts-ignore
    this.listOfPosts[index].numberOfLikes +=1;
  }

  setPosts(listOfPosts : Post[]){
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }

}
