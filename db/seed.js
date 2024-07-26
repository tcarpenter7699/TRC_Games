const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt");
const saltRounds = 10;

const prisma = new PrismaClient()

async function main() {
    console.log("Seeding DB");

    //CREATING GAMES//
    await prisma.games.create({
        data: {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONAylzR8udd1tOtD2MS0iZ8kp9FduO1x-Og&s" ,
            name: "Assassin's Creed Odyssey",
            developer: "Ubisoft",
            year: "2018",
            platform: "PS4, Xbox One, PC, Amazon Luna",
            categ_id: "RPG",
            description: "Assassin's Creed Odyssey is a 2018 action role-playing video game developed by Ubisoft Quebec and published by Ubisoft. It is the eleventh major installment in the Assassin's Creed series and the successor to 2017's Assassin's Creed Origins."
        }
    });
    await prisma.games.create({
        data: {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3934mcobAqQRhudDc_F5RKy26v9WhaHdF5A&s" ,
            name: "Car Mechanic Simulator 2021",
            developer: "Red Dot Games",
            year: "2021",
            platform: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC",
            categ_id: "Simulator",
            description: "Car Mechanic Simulator 2021 is a highly realistic simulation video game depicting the work of an automotive mechanic. It is the sequel of CMS 2018. Start as a fresh owner of a car garage and work your way to a service empire."
        }
    });
    await prisma.games.create({
        data: {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDc3CIiZemBqK4KPUosJoSFqu0CheJQCf9g&s" ,
            name: "Cities: Skylines",
            developer: "Colossal Order",
            year: "2015",
            platform: "Epic, Microsft, Nintendo Switch, Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5",
            categ_id: "Sandbox",
            description: "Cities: Skylines is a 2015 city-building game developed by Colossal Order and published by Paradox Interactive. The game is a single-player open-ended city-building simulation. Players engage in urban planning by controlling zoning, road placement, taxation, public services, and public transportation of an area."
        }
    });
    await prisma.games.create({
        data: {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFtczO-QgTv3-twDOA6ViOoLepsgJUvZdGA&s" ,
            name: "Destiny",
            developer: "Bungie",
            year: "2014",
            platform: "PlayStation 3, PlayStation 4, Xbox One, Xbox 360",
            categ_id: "Shooter",
            description: "Destiny is an online first-person shooter video game developed by Bungie. It was released worldwide on September 9, 2014, for the PlayStation 3, PlayStation 4, Xbox 360, and Xbox One consoles."
        }
    });
    await prisma.games.create({
        data: {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdrw8xnIPqntWOQW47sHEwicdSvUC0rzfSQ&s" ,
            name: "Fall Guys",
            developer: "Mediatonic",
            year: "2020",
            platform: "Nintendo Switch, PlayStation 5, PlayStation 4, Microsoft Windows, Xbox Series X/S",
            categ_id: "Party Game",
            description: "Fall Guys is a free-to-play platform battle royale game developed by Mediatonic and published by Epic Games."
        }
    });
    await prisma.games.create({
        data: {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLZURIG-pbNZXKvYYXvVJbo5zj1ctIJVeT8_gR32EREM7nGuEt9343F5gFg&s" ,
            name: "Forza Horizon 4",
            developer: "Playground Games",
            year: "2018",
            platform: "Microsoft Windows, Xbox One, Xbox Series X and Series S, Xbox Cloud Gaming, GeForce Now",
            categ_id: "Driving/Racing",
            description: "Forza Horizon 4 is a 2018 racing video game developed by Playground Games and published by Microsoft Studios. It was released on 2 October 2018 for Windows and Xbox One after being announced at Xbox's E3 2018 conference. An enhanced version of the game was released on Xbox Series X/S on 10 November 2020."
        }
    });
    await prisma.games.create({
        data: {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qvSf-Q9l1LiAJE_n7yaibsXDBYSObyBtLaYZZwXrmkjHozeBVSULouW9yg&s" ,
            name: "GTA 5",
            developer: "Rockstar North",
            year: "2013",
            platform: "PlayStation 3, PlayStation 4, PlayStation 5, Xbox 360, Xbox One, Xbox Series X/S, Windows",
            categ_id: "Action/Adventure",
            description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall."
        }
    });
    await prisma.games.create({
        data: {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbC6rW8cqh0aN-jrEsx1ct7s_1h4rTLU_9Q&s" ,
            name: "Injustice: Gods Among Us",
            developer: "NetherRealm Studios",
            year: "2013",
            platform: "PlayStation 3, PlayStation 4, Xbox 360, Android, iOS, PlayStation Vita, Wii U, Microsoft Windows",
            categ_id: "Fighting",
            description: "Injustice: Gods Among Us is a 2013 fighting video game. It is the first installment in the Injustice franchise based upon the fictional universe of DC Comics. The game was developed by NetherRealm Studios and published by Warner Bros. Interactive Entertainment for the PlayStation 3, Wii U, and Xbox 360."
        }
    });
    await prisma.games.create({
        data: {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9d0u5OZasrBa2ilBqz_e0UeK4JuK8OpFSww&s" ,
            name: "Madden NFL 24",
            developer: "EA Tiburon",
            year: "2023",
            platform: "PlayStation 5, PlayStation 4, Xbox One, Xbox Series X and Series S, Xbox Cloud Gaming, Microsoft Windows",
            categ_id: "Sports",
            description: "Madden NFL 24 is an American football video game developed by EA Tiburon and published by EA Sports. Based on the National Football League, it is an installment in the Madden NFL series and follows Madden NFL 23. Buffalo Bills quarterback Josh Allen is the cover athlete for the game."
        }
    });

    //Creating Users
    await prisma.users.create({
        data: {
            firstName: "Trent",
            lastName: "Carpenter",
            username: "tcar7699",
            password: await bcrypt.hash("tcar7699", saltRounds)
        }
    });
    await prisma.users.create({
        data: {
            firstName: "Madison",
            lastName: "Goodwin",
            username: "mgood0131",
            password: await bcrypt.hash("mgood0131", saltRounds)
        }
    });

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })}