// -- ToDo --
//  1. Capture the data from array
//  2. Display the data in html
//  3. Create a function for sorting the data by userID
//  4. Styling

var postManager = function (data) {
  var container = document.getElementById("content");

  for (var i = 0; i < data.length; i++) {
    var post = `<ul>
          <li> <h2>${data[i].userId} ${data[i].title}</h2> <p>${data[i].body}</p></li>
          </ul>`;

    container.innerHTML += post;
  }
};

postManager.prototype.posts = [
  {
    userId: 3,
    id: 1,
    title: "8 useful CSS tricks: Parallax images, sticky footers and more",
    body:
      "This article shares some of my most satisfying “ah-hah!” moments learning CSS, and I hope it can prompt some",
  },
  {
    userId: 3,
    id: 2,
    title: "How to get better at writing CSS",
    body:
      "Let’s not beat around the bush: writing great CSS code can be painfulA lot of developers don’t want to do CSS developmentI can do everything you want, but nah! No CSS.",
  },
  {
    userId: 2,
    id: 3,
    title: "Design System based on the 8pt Grid",
    body:
      "If you and your team aren’t using a Design System (DS)please open the latest project in your favorite design software,and count the myriad of shades of your primary color and grays",
  },
  {
    userId: 1,
    id: 4,
    title: "Iconography",
    body:
      "If you intend on using icons in a different size, I would recommend designing your icon on 16×16 pixels gridand another version on a 20×20 pixels grid. This way you’re covered for any size: 16, 20, 24 (16×1.5), 32, 40 and so forth.",
  },
  {
    userId: 5,
    id: 5,
    title: "Why Black People Don’t Go Camping",
    body:
      "I grew up camping in the Pacific Northwest.From the chilly, Oregon Coast, to the deep sapphire waters of the Puget Sound,my summers were filled with exploring the wonders of the west coast and the waters next to it.",
  },
];

postManager.prototype.posts.sort(function (a, b) {
  return a.userId - b.userId;
});

new postManager(postManager.prototype.posts);
