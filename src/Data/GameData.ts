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
        imgs: ["hero.png","omori.jpg","OmoriMenu.png","OmoriFriends.png"],
        featured: false,
        release: "December 25, 2020",
        rating: 4,
        description: "Explore a strange world full of colorful friends and foes. Navigate through the vibrant and the mundane in order to uncover a forgotten past. When the time comes, the path you’ve chosen will determine your fate... and perhaps the fate of others as well.",
        system: "PC",
        tags: ["Story","Pixel", "Horror", "Psychological"],
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
        imgs: ["totkpromo.png","totkLink.png","totkZelda.png","totkGanondorf.jpg"],
        featured: true,
        featuredImg: "totk.jpg",
        release: "May 12, 2023",
        rating: 4.7,
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
        imgs: ["banjokazooie.png","grunty.png","gobisvalley.png","mumbotoken.jpg"],
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
        imgs: ["ootpromo.jpg","linkshiek.png","ootsages.png","firetemple.png"],
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
    }

]

export default gamedata