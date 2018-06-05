
var friendsData = [
  {
    "name": "John",
    "imageUrl": "https://cdn.shopify.com/s/files/1/0891/8314/products/Y_U_NO_Die_Cut_D_4fedca0789bff_large.jpeg?v=1459067202",
    "scores": [1,2,3,4,5,1,2,3,4,5]
},
  {
    "name": "Josie",
    "imageUrl": "http://www.ragefaces.memesoftware.com/faces/large/angry-no-l.png",
    "scores": [1,2,3,4,5,1,2,3,4,5]
},
  {
    "name": "Jacob",
    "imageUrl": "https://fthmb.tqn.com/hKy29JM3NESuE84ROIv3fmFbR_k=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/foreveralone-58072dc65f9b5805c23977d3.png",
    "scores": [1,2,3,4,5,1,2,3,4,5]
},
  {
    "name": "Jannine",
    "imageUrl": "https://s-media-cache-ak0.pinimg.com/originals/21/2b/93/212b93cc99bf19c1a87d14bf4335caec.jpg",
    "scores": [1,2,3,4,5,1,2,3,4,5]
},
  {
    "name": "Jeronimo",
    "imageUrl": "https://abrilexame.files.wordpress.com/2016/09/size_960_16_9_20151020-25144-9f3b5r.jpg?quality=70&strip=info&w=920",
    "scores": [1,2,3,4,5,1,2,3,4,5]
},
  {
    "name": "Jeffrey",
    "imageUrl": "https://d6ce0no7ktiq.cloudfront.net/images/stickers/471.png",
    "scores": [1,2,3,4,5,1,2,3,4,5]
},
  {
    "name": "Joe",
    "imageUrl": "https://vignette.wikia.nocookie.net/wikiaglobal/images/d/d5/Wikia-Visualization-Main%2Cmeme.png/revision/latest?cb=20130802195400",
    "scores": [1,2,3,4,5,1,2,3,4,5]
},
  {
  "name": "Jimmy",
  "imageUrl": "http://wallpaperen.com/wp-content/uploads/2017/12/new-sad-troll-face-meme-okay-meme-face-sad-troll-face-meme.jpg",
  "scores": [1,2,3,4,5,1,2,3,4,5]
},
  {
  "name": "Jay",
  "imageUrl": "https://vignette.wikia.nocookie.net/nerf/images/e/ee/Funny-Meme-Faces-17.jpg/revision/latest?cb=20161012013913",
  "scores": [1,2,3,4,5,1,2,3,4,5]
},
  {
  "name": "Jasmine",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJCN9nHbkcx4TBhPbptfLh_eAf9XLj7yoC-QZf5XJ-8oKA5lW",
  "scores": [1,2,3,4,5,1,2,3,4,5]
}
  ];




// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;




// You should save your application's data inside of app/data/friends.js as an array of objects.
//Each of these objects should roughly follow the format below.
//
//
//
//
// Determine the user's most compatible friend using the following as a guide:
//
//
//
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's
// scores against those from other users, question by question.
// Add up the differences to calculate the totalDifference.
//
//
// Example:
//
//
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
//
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
//
// Total Difference: 2 + 1 + 2 = 5
//
//
//
//
//
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
//
//
//
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//
//
// The modal should display both the name and picture of the closest match.
//
//

// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
