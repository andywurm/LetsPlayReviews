export interface GameData {
    title: string,
    imgs: string[],
    featured: boolean,
    release: string,
    rating: number,
    description: string,
    tags: string[],
    reviews: any[]
}

const gamedata: GameData[] = [
    {
        title: "Omori",
        imgs: [],
        featured: false,
        release: "December 25, 2020",
        rating: 4,
        description: "Explore a strange world full of colorful friends and foes. Navigate through the vibrant and the mundane in order to uncover a forgotten past. When the time comes, the path you’ve chosen will determine your fate... and perhaps the fate of others as well.",
        tags: ["PC", "Story","Pixel Art", "Horror"],
        reviews: [
            {
                username: "GmRvwr20",
                date: "May 11, 2023",
                userRating: 4.5,
                comment: "Omori is such a wholesome experience which I’ll never forget. I’m not one for horror games, so I don’t usually check them out. This is one of the few that I actually am very glad I did so. It’s not too heavy on the horror aspect, and it’s like a slice of life. It has rpg elements, and a art style that doesn’t mind being too playful. Not to mention the soundtrack that compliments the art style like pb&j. Storywise, it’s a rollercoaster which lead me to many paths I never expected a game to take me.  I learned a lot, and on the way I felt many emotions. Moments that’ll gladly be burrowed in my memories. If your hesitant to get OMORI, trust me, you won’t regret buying this game."
            }
        ]
    }
]

export default gamedata