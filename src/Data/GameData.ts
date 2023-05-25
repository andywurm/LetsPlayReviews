export interface GameData {
    title: string,
    imgs: string[],
    featured: boolean,
    featuredImg?: string
    release: string,
    rating: number,
    description: string,
    system: string
    tags: string[],
    reviews: any[]
}

const gamedata: GameData[] = [
    {
        title: "Omori",
        imgs: ["hero.png", "omori.jpg", "OmoriMenu.png", "OmoriFriends.png"],
        featured: false,
        release: "December 25, 2020",
        rating: 4.5,
        description: "Explore a strange world full of colorful friends and foes. Navigate through the vibrant and the mundane in order to uncover a forgotten past. When the time comes, the path you’ve chosen will determine your fate... and perhaps the fate of others as well.",
        system: "PC",
        tags: ["Story", "Pixel", "Horror", "Psychological"],
        reviews: [
            {
                username: "GmRvwr20",
                date: "May 11, 2023",
                userRating: 4.5,
                comment: "Omori is such a wholesome experience which I’ll never forget. I’m not one for horror games, so I don’t usually check them out. This is one of the few that I actually am very glad I did so. It’s not too heavy on the horror aspect, and it’s like a slice of life. It has rpg elements, and a art style that doesn’t mind being too playful. Not to mention the soundtrack that compliments the art style like pb&j. Storywise, it’s a rollercoaster which lead me to many paths I never expected a game to take me.  I learned a lot, and on the way I felt many emotions. Moments that’ll gladly be burrowed in my memories. If your hesitant to get OMORI, trust me, you won’t regret buying this game."
            }
        ]
    },
    {
        title: "Tears of The Kingdom",
        imgs: ["totkpromo.png", "totkLink.png", "totkZelda.png", "totkGanondorf.jpg"],
        featured: true,
        featuredImg: "totk.jpg",
        release: "May 12, 2023",
        rating: 4.8,
        description: "Sequel to The Legend of Zelda: Breath of the Wild (2017), that takes place just after the events occurred in its predecessor.",
        system: "Nintendo Switch",
        tags: ["Adeventure", "Action", "Fantasy"],
        reviews: [
            {
                username: "ZeldaMaster",
                date: "May 12, 2023",
                userRating: 5,
                comment: "An absolutely amazing game! It has everything you can want in a open world rpg game. The sandbox elements are definitely a breath of fresh air, the ability to build and experiment is top notch! I started playing at midnight when it came out and stayed playing until 5 in the morning and I would have kept playing if my switch didn't die. If you loved breath of the wild, you will lose your mind with this game. Worth the 70 bucks 100%"
            }
        ]
    },
    {
        title: "Banjo Kazooie",
        imgs: ["banjokazooie.png", "grunty.png", "gobisvalley.png", "mumbotoken.jpg"],
        featured: false,
        release: "June 29, 1998",
        rating: 4.3,
        description: "The witch Gruntilda has captured Banjo's beloved sister, intending to leech the girl's youth and beauty through black magic and mad science. Banjo and Kazooie set out across nine worlds to get her back.",
        system: "Nintendo 64",
        tags: ["Adeventure", "Action", "Comedy"],
        reviews: []
    },
    {
        title: "Ocarina of Time",
        imgs: ["ootpromo.jpg", "linkshiek.png", "ootsages.png", "firetemple.png"],
        featured: false,
        release: "November 21, 1998",
        rating: 4.9,
        description: "A young Kokiri boy discovers that his destiny is to free the Seven Sages and save the land of Hyrule from the treacherous sorcerer Ganondorf.",
        system: "Nintendo 64",
        tags: ["Adeventure", "Action", "Fantasy"],
        reviews: [
            {
                username: "xSarahx",
                date: "May 12, 2023",
                userRating: 5,
                comment: "The greatest, single experience of my life. The joy I feel when playing and thinking about this single game is insurmountable in words."
            },
            {
                username: "Doge4Life",
                date: "May 10, 2023",
                userRating: 5,
                comment: "I'm very new to the Zelda series playing Ocarina of Time in 2019, I didn't get the nostalgia thing everyone else is saying about but this is still an incredible game and I ca see why it's said by most gamers to be the best game of all time."
            }
        ]
    },
    {
        title: "Before Your Eyes",
        imgs: ["beforeyoureyespromo.jpg", "byemom.png", "byechloe.jpg", "byegatekeeper.png"],
        featured: false,
        release: "April 8, 2021",
        rating: 4.2,
        description: "The recently deceased Benjamin Brynn is on his way to the afterlife. The player must interact with Brynn's memories through an eye-tracking webcam to progress, as the game reads and responds to the player's eye movement and blinking.",
        system: "PC",
        tags: ["Story", "Psychological"],
        reviews: []
    },
    {
        title: "Kingdom Hearts",
        imgs: ["khpromo.jpg", "kh.jpg", "khkairi.png", "khsora.png"],
        featured: false,
        release: "March 28, 2002",
        rating: 4.6,
        description: "When his world is destroyed and his friends mysteriously disappear, a young boy named Sora is thrust into a quest to find his missing friends and prevent the armies of darkness from destroying many other worlds.",
        system: "Playstation",
        tags: ["Story", "Fantasy", "Action", "Adventure"],
        reviews: [
            {
                username: "NotxLea",
                date: "May 24, 2023",
                userRating: 4.2,
                comment: "Years in the making and hyped like crazy, Kingdom Hearts for the PlayStation 2 had me eagerly awaiting for months. Although not a big Disney fan, I salivated at the dream of seeing all the great Disney and SquareSoft characters together in one DVD game. When September 17, 2002 came, I ran out to get my copy and have been enthralled by this game's beauty, charm, and playability."
            }
        ]
    },
    {
        title: "A Way Out",
        imgs: ["awayoutpromo.jpg", "awoLeo.jpg", "awoVincent.jpg", "awotwo.jpg"],
        featured: false,
        release: "March 23, 2018",
        rating: 4.1,
        description: "Prison inmates Vincent and Leo initially clash, but after Vincent helps Leo win a fight, they warm up to each other and decide to escape together.",
        system: "Playstation",
        tags: ["Story", "Action", "Adventure"],
        reviews: [
            {
                username: "NoFaceLuvr",
                date: "May 23, 2023",
                userRating: 5,
                comment: "You'll find nearly everything in this game: action, escape from prison, family drama and a surprising ending!"
            }
        ]
    },
    {
        title: "One Shot",
        imgs: ["oneshotpromo.png", "oneshotboat.jpg", "oneshotgame.jpg", "nikopancakes.png"],
        featured: false,
        release: "December 8, 2016",
        rating: 4,
        description: "Summoned to a self contained digital universe, a young child with catlike features and eyes, waking up, learns about their role as 'the messiah'. And begins their journey, a pilgrimage, to restore the world's long dead sun.",
        system: "PC",
        tags: ["Story", "Adventure", "Puzzle"],
        reviews: []
    },
    {
        title: "Wind Waker",
        imgs: ["windwakerpromo.jpg", "wwlink.png", "wwgame.png", "wwtetra.png"],
        featured: false,
        release: "December 13, 2002",
        rating: 4.7,
        description: "After his sister gets kidnapped from their peaceful island, a young boy aims to emulate the Hero of Time by saving her.",
        system: "GameCube",
        tags: ["Action", "Adventure"],
        reviews: [
            {
                username: "K!ngDaph3z",
                date: "May 21, 2023",
                userRating: 5,
                comment: "This was the first real zelda game I ever played, and I love it with all my heart. This game has no flaws, and is great for beginners to the zelda series. Spoiler warning: My god. The ending is so violent for such a cartoony game, I gasped when I saw ganondorf's head get stabbed. Five out of five stars."
            }
        ]
    },
    {
        title: "Super Princess Peach",
        imgs: ["superprincesspeachpromo.jpg", "sppgame.png", "spphappy.png", "sppemotions.png"],
        featured: false,
        release: "May 26, 2006",
        rating: 3.5,
        description: "The nefarious Bowser and his koopa horde plotting a diabolical scheme to capture the famous defenders of the Mushroom Kingdom, Mario and Luigi. The plan is successful, and with Mario and Luigi out of the picture, who else is going to save the day but Peach? Join Peach as she makes her way to a showdown with Bowser and the rescue of the plumbing pair.",
        system: "Nintendo DS",
        tags: ["Action", "Adventure"],
        reviews: []
    },
    {
        title: "Pikmin 4",
        imgs: ["pikminpromo.jpg", "pmain.png", "pgame.png", "phunt.png"],
        featured: true,
        featuredImg: 'pikminfeat.png',
        release: "July 21, 2023",
        rating: 0,
        description: "Meet Pikmin, small, plantlike creatures you can grow, pluck, command, and overpower your enemies with! These curious helpers come in different types—fire is no sweat for Red Pikmin and the brand-new Ice Pikmin can freeze enemies and the environment. Use your Pikmin’s miniature might (and a bit of strategy) to explore this mysterious planet.",
        system: "Nintendo Switch",
        tags: ["Adventure", "Puzzle"],
        reviews: []
    },

]

export default gamedata
