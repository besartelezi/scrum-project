# SCRUM-ming our way to a Geeky eBay!
This assignment is a big, beefy one.
We will be working in group to create an e-Bay-like website for a client.
This is a project where the deadline is in 2 weeks.
As of now, this is the biggest assignment that BeCode has given us yet.

We will be learning how to work with SCRUM, communicating properly with a client and other developers, as well as how to plan, start and finish a big project like this.
Something very important here is that we need to decide for ourselves how we will tackle everything.
The client doesn't know how they want everything, that's for the developers to decide.

The best way to describe this assignment, is by adding my favourite BeCode meme to the README.

![spongebob-meme](readme-images/advanced-becode.png)

---

## Meet The Team

* [Shiva](https://github.com/shivamottaghi): Full-Stack Developer
* [Pablo](https://github.com/PabloGP18): Full-Stack Developer
* [Jelle](https://github.com/jelle-vdp): Lead Frontend Developer
* [Lucas](https://github.com/Gepoverlow): Lead Backend Developer
* [Besart](https://github.com/besartelezi): Scrum-Master and Full-Stack Developer

## Q&A with the Client
Here we have written down the notes we made when we had our first talk with the client.

### Name of the site: G-Bay

* Cool font, G-Bay as logo, color and design: very geeky, fun, interactive, flashy,...
* Bol.com functionality, looks dry and commercial, but fun interactiveness
* Amazon/2dehands for pure products, but make everything geeky
* Payments need to be clear, email confirm payment happened, payment system not needed

### Must-Haves 

* Ebay, main difference, Geeky kind of version.
* Categories: Marvel, Pokemon, ATLA, DBZ,...
* People log in and sell/buy
* product with price, pic, description
* Work smoothly on email, email confirmation to seller
* seller: your product had been bought, send to this ...
* Shopping cart, add multiple products and remove them

### Nice-to-haves

* Wish list
* Recommended section, when buying/clicking
* Purchase history
* Track previous prices of same product, prices then and now, user should be able to see prices fluctuate
* Create as much action on website as possible, on every purchase/sell, add site currency (GeekCoins)
* Sell products using GeekCoins
* Bidding System, seller need to define a buy-out price => instant purchase
* Payment: Bank-Account variable, user can add as much money as possible to it.

---

## Workflow: Flowing through our work

* Rest API/Node.JS for backend, React for front-end. 
* GitHub behaviour: Setting up small branches for big features, and add smaller branches to those for smaller features. 
* Pull requests: ask coaches => They recommend learning Pull Requests, this is a very common practice, will help avoid unintentional mistakes.
* Using Trello: When an event is done, communicate it on Discord (create pull requests).

---

## User Stories
User stories are a method for developers to create better, more concise and smaller goals for the project.
By thinking as the user, we can more concretely think of what's necessary.
So, we added some user stories for several big parts of the project, so we can split them up into smaller, more attainable goals.

### Log-in / Register
I want a login/register page on the website.
So that I'm able to register and login to the website.
Because this way I can buy stuff, I can get a notification when one of my products is sold and I can buy other products more easily.

### Product List
I want a product list.
So that I can navigate through categories and pick out the items I'd like to buy.
Because it's easier to filter what I want.

### Add new Product page
I want a method that lets me sell a product I'd like to sell.
So that I can add a product that I want to sell.
Because I want a way for the other people to see my product and be interested in buying it.

### Homepage
I want a homepage on the website.
So that I get greeted by a page that makes me immediately understand what site it is, and how it works.
Because I want to understand immediately what the website is about.

### About us page
I want an about us page.
So that I can learn more about this fun geek-alicious ebay-like website.
Because I want to be sure that I register to a website that I can trust.

### User Dashboard
I want a dashboard.
So that I can log in to the page, see all different items I am selling, add new ones, delete the ones I don't want to sell anymore or that has been sold, and update the products I'm trying to sell.
Because I want to get some $$$ from products I'm not using anymore.

### Email Confirmation
I want to receive an email when something has been sold/when I buy something.
So that I know when something has been sold.
Because I need the confirmation in order to know nothing went wrong.

---

## Day-to-Day Summaries!
Here we will write down all short summaries of what we did, how we did it, and why we did it.

### Day 1: "Developer-Team Aligos has been born!"
After Pablo assembled the Aligo-vengers, we had our very first meeting.
It was decided that we would prepare some questions for the client, since we only have one meeting with them every week and they respond slowly to emails.
After that, we started to prepare how we would tackle the backend and the frontend.
It was decided we would use a restful API and a database for the frontend, and React for the front end.

Then we decided what rules we should follow regarding our Git behaviour.
We thought using Pull requests would've been the best way, since we were all unfamiliar with it and learning is what being a developer is all about!
It's also the most professional way of working.
Afterwards, it was decided that we would add a branch called "Development".
In that branch, we would add other branches like "homepage" and the like.
Then those branches would be split up once more into smaller branches, named after every feature that would be added for that main feature.

Once that was all written out, we opened up our Trello and started writing out small and attainable goals as if our livelihood depended on it (which it will in the future).
Since it was our first time using Trello as a SCRUM board, there was some struggling, but nothing the 5 Aligos couldn't handle!
We quickly decided how we would order all tasks, how we would add more tasks when needed, and how we would start on the assignment.

All in all, it was a great first day!

![aligos-assemble](readme-images/aligos-assemble.png)

### Day 2: "Our Big G(b)ay International Logo"
The second day started out like all future days will start, with a meeting.
We went over everything what was done, and what needed to be done. 
An email was sent to the client for some additional information, the database was nearly done, and there was some huge progress made in the front end.

After the meeting we also let our Lead Developers inform the rest of the team what features they added and what other features they'd like to add.
This gave the rest of the team a clearer view of what they could help with and what needs to be done.

Then right before our lunch-break, we held another meeting.
Frequent meetings is something that is very important to the Aligos.
Group up every so often so that everyone can work separately as efficient as possible, or in smaller sub-groups.

The most notable event of that day was when Besart added the logo to our repository.
He made a wonderful logo on Adobe Illustrator.
Unfortunately, he used a custom font and forgot to turn the text into outlines.
This caused a weird bug that made our logo look like this.

![our-logo](readme-images/wrong-logo.PNG)

Luckily we were able to fix this issue in less than a minute (after ten minutes of constant laughter).
This is how the logo was supposed to look like.

![our-actual-logo](readme-images/fixed-logo.PNG)

This was a valuable lesson to always double-check my files before committing them to GitHub.
A funny lesson, but a lesson nonetheless!

### Day 3: "PostgreSQL V.S. MongoDB"
The third day was a day of decision-making.
After having a stand-up meeting in the morning, we decided we would swap our SQL database for a ProgreSQL database.
The other option was to use a MongoDB database.
We wanted to swap the database, because we wanted to use something that natively works with Heroku.

The main advantage of MongoDB was that it is less time-consuming.
But, if we change to MongoDB, we would waste a lot of time on creating a new database from scratch, and rewriting all the code from the backend.
So it's main advantage is nullified **immediately**.
However, this was a very nice lesson on databases.
Through this we now understand that picking the correct database at the start of the project, is very essential.

Eventually we decided on using ProgreSQL, which had its own fair share of a lot of advantages.
We did not care for the fact that it might be harder to use and a bit more time-consuming.
As a group, we decided early on that learning new stuff and learning how to work as professionally as possible are the most important parts of this assignment.
Pleasing the client is also important as well, but communicating well with the client is even more important.

Our day ended the same way it started, with a meeting.
This was needed since we wanted to check how much progress everyone made, and divide the work better if needed.

### Day 4: "Oh CRUD, it's finally the weekend!"
At the start of the project, we had set one major goal for ourselves: "To have set up a database connection".
We finished that goal on the end of day 3, and decided on a new goal the next day.
So our new goal was to have the front- and back end communicate with each other.
This is a **very** big deal, and something we will focus on from the new week onwards.

Day 4 was all about planning, and communication.
We set up yet another small goal for monday, since mondays are client-days!
The front end was looking great, so we wanted to show what we have to the client on monday.
Questions were also prepared so we can get as much information as possible from the client.

With the weekend nearing, and every single one of our members being raging workaholics, we decided to create some guidelines for us all to follow.

When working in the weekends:
* Make sure to use Trello, let everyone know who's working on what.
  * Also mention it in the discord chat
* When you're working, join the discord voice channel, even when you're not going to talk with anyone.
  * So if another member sees you working, you can help each other out!
* COMMUNICATION!!
  * Communicate with team-members and the SCRUM master when you're taking a ticket and when you're done with a ticket.

With communication being key, we have prepared yet another meme to show just how important communication is to us.

![scrum-meme](readme-images/scrum-meme.png)