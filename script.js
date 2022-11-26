let allData = [];

let myPosts = [
  {
    "postID": 1,
    "postTitle": "Exercise Everyday",
    "postBody": "I play football every sunday, and run around the neighborhood every day.",
  },
  {
    "postID": 2,
    "postTitle": "Drinking Coffee",
    "postBody": "I drink coffee every morning and sometimes twice a day.",
  },
  {
    "postID": 3,
    "postTitle": "Watching TV",
    "postBody": "I watch TV every evening until i fall asleep.",
  },
];

let myComments = [
  {
    "commentID": 1,
    "commentToPost": 1,
    "commentBody": "Body of Comment1, Body of Comment1, Body of Comment1, Body of Comment1, Body of Comment1.",
  },
  {
    "commentID": 2,
    "commentToPost": 1,
    "commentBody": "Body of Comment2, Body of Comment2, Body of Comment2, Body of Comment2, Body of Comment2.",
  },
  {
    "commentID": 3,
    "commentToPost": 2,
    "commentBody": "Body of Comment3, Body of Comment3, Body of Comment3, Body of Comment3, Body of Comment3.",
  },
  {
    "commentID": 4,
    "commentToPost": 2,
    "commentBody": "Body of Comment4, Body of Comment4, Body of Comment4, Body of Comment4, Body of Comment4.",
  },
  {
    "commentID": 5,
    "commentToPost": 3,
    "commentBody": "Body of Comment5, Body of Comment5, Body of Comment5, Body of Comment5, Body of Comment5.",
  },
  {
    "commentID": 6,
    "commentToPost": 3,
    "commentBody": "Body of Comment6, Body of Comment6, Body of Comment6, Body of Comment6, Body of Comment6.",
  },
  {
    "commentID": 7,
    "commentToPost": 1,
    "commentBody": "Body of Comment7, Body of Comment7, Body of Comment7, Body of Comment7, Body of Comment7.",
  },
  {
    "commentID": 8,
    "commentToPost": 1,
    "commentBody": "Body of Comment8, Body of Comment8, Body of Comment8, Body of Comment8, Body of Comment8.",
  },
  {
    "commentID": 9,
    "commentToPost": 3,
    "commentBody": "Body of Comment9, Body of Comment9, Body of Comment9, Body of Comment9, Body of Comment9.",
  },
];


//=============================================================================================================


let allPosts = new Promise((resolve)=> {
  resolve(myPosts);
});

let allComments = new Promise((resolve)=> {
  resolve(myComments);
});


//=============================================================================================================


allPosts.then((posts) =>  pushPostsToAllData(posts))
.then(() => allComments)
.then((comments) => pushCommentsToAllData(comments))
.then(() => printToHTML(allData));


function pushPostsToAllData(alotOfPosts) {
  allData.push(alotOfPosts);
  return alotOfPosts;
}

function pushCommentsToAllData(alotOfComments) {
  allData.push(alotOfComments);
  return alotOfComments;
}


//=============================================================================================================


function printToHTML(showMeAllDataInConsole) {

  console.log(showMeAllDataInConsole);

  let mainContainer = document.createElement('div');
  document.body.appendChild(mainContainer);
  mainContainer.setAttribute('class', 'mainContainer');

  let div1 = document.createElement('div');
  mainContainer.appendChild(div1);
  div1.setAttribute('class', 'myDiv');

  let div2 = document.createElement('div');
  mainContainer.appendChild(div2);
  div2.setAttribute('class', 'myDiv');
  
  let div3 = document.createElement('div');
  mainContainer.appendChild(div3);
  div3.setAttribute('class', 'myDiv');

  let titlePost1 = document.createElement('h2');
  titlePost1.innerHTML = allData[0][0].postTitle;
  div1.appendChild(titlePost1);

  let titlePost2 = document.createElement('h2');
  titlePost2.innerHTML = allData[0][1].postTitle;
  div2.appendChild(titlePost2);

  let titlePost3 = document.createElement('h2');
  titlePost3.innerHTML = allData[0][2].postTitle;
  div3.appendChild(titlePost3);

  let postContent1 = document.createElement('h3');
  postContent1.innerHTML = allData[0][0].postBody;
  div1.appendChild(postContent1);

  let postContent2 = document.createElement('h3');
  postContent2.innerHTML = allData[0][1].postBody;
  div2.appendChild(postContent2);

  let postContent3 = document.createElement('h3');
  postContent3.innerHTML = allData[0][2].postBody;
  div3.appendChild(postContent3);

  setTimeout(() => {
    for(i = 0; i < allData[0].length; i++) {
      for(j = 0; j < allData[1].length; j++) {
        if(allData[0][i].postID == allData[1][j].commentToPost && allData[0][i].postID == 1) {
          let newPara = document.createElement('p');
          newPara.innerHTML = allData[1][j].commentBody;
          div1.appendChild(newPara);
        }
        else if (allData[0][i].postID == allData[1][j].commentToPost && allData[0][i].postID == 2) {
          let newPara = document.createElement('p');
          newPara.innerHTML = allData[1][j].commentBody;
          div2.appendChild(newPara);
        }
        else if (allData[0][i].postID == allData[1][j].commentToPost && allData[0][i].postID == 3) {
          let newPara = document.createElement('p');
          newPara.innerHTML = allData[1][j].commentBody;
          div3.appendChild(newPara);
        }
      }
    }
  }, 3000); 
}