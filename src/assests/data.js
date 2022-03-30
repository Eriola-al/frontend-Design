import vip from "./vipGirl.jpg";
import gq from './gq.jpg';
import pic2 from "./pic2.jpg";
import girl from "./girl.png";
import group from "./group.jpg";
import men from "./men.jpg";
import ndFLogo from "./ndFLogo.PNG";
import rdFLogo from './rdFLogo.PNG';
import rthFLogo from './rthFLogo.PNG';
import stNLogo from './stNLogo.PNG';
import stFLogo from './stFLogo.PNG';
import stringr from './stringr.png';
import trending from './trending.jpg'
import delish from './delish.jpg';
import veuer from './veuer.jpg';
import ndNLogo from './ndNLogo.PNG';
import newsy from './newsy.jpg';
import rdNLogo from './rdNLogo.PNG';
import insider from './insider.png';
import rthNLogo from './rthNLogo.PNG';
import stSLogo from './stSLogo.PNG';
import sportsIlustrated from './sportsIlustrated.png';
import ndSLogo from './ndSLogo.PNG';
import clns from './clns.jpg';
import rdSLogo from './rdSLogo.PNG';
import fan from './fan.jpg';
import rthSLogo from './rthSLogo.PNG';
import sportsgrid from './sportsgrid.png';
import stELogo from './stELogo.PNG';
import glamour from './glamour.jpg';
import ndELogo from './ndELogo.PNG';
import vogue from './vogue.png';
import rdELogo from './rdELogo.PNG';
import hollywood from './hollywood.jpg';
import rthELogo from './rthELogo.PNG';
import deadline from './deadline.png';
import stMLogo from './stMLogo.PNG';
import fuse from './fuse.jpg';
import ndMLogo from './ndMLogo.PNG';
import fader from './fader.jpg';
import rdMLogo from './rdMLogo.PNG';
import billboard from './billboard.jpg';
import rthMLogo from './rthMLogo.PNG';
import rollingStones from './rollingStones.png';
import hollywoodLife from './hollywoodLife.png';
import wired from './wired.png';
import cosmopolitan from './cosmopolitan.jpg';

const data = [
  {
    category: "Featured",
    categoryTitle: "Top stories today",
    list: [
      {
        image: stFLogo,
        labelTag: 'LATEST',
        title: "What is Putin's End Goal?",
        sourceName: 'Stringr',
        sourceLogo: stringr,
        timestamp: "Added 21 hours ago",
        seeMore: "See more about",
        buttonName: "VLADIMIR PUTIN"
      },
      {
        image: ndFLogo,
        labelTag: 'LATEST',
        title: "Umbrella Academy's Justin H.Min Replies to Fans on the Internet | Actually Me | GQ",
        sourceName: 'GQMagazine',
        sourceLogo: gq,
        timestamp: "Added 2 days ago",
        seeMore: "See more about",
        buttonName: "THE UMBRELLA ACADEMY (TV SER..."
      },
      {
        image: rdFLogo,
        labelTag: 'LATEST',
        title: "TikToker Calls Out Delta Airlines for Size Exclusion",
        sourceName: "What's Trending",
        sourceLogo: trending,
        timestamp: "Added 2 days ago"
      },
      {
        image: rthFLogo,
        labelTag: 'LATEST',
        title: "This Smoky Split Pea Soup Is An All-Time Favorite",
        sourceName: 'Delish',
        sourceLogo: delish,
        timestamp: "Added 2 days ago"
      },
    ],
    subCategories: [
      {
        name: "More",
        secName : "Featured videos",
        list: [
          {
            subTitle:
                "Heidi Montag Accuses Lady Gaga Of Sabotaging Her Music Career And Stealing Her Song",
            timestamp: "Added 2 days ago",
            subImage: vip,
            sourceLogo: hollywoodLife,
            sourceName : 'HollywoodLife'

          },
          {
            subTitle:
                "Astrophysicist Explains Black Holes in 5 Levels of Difficulty",
            timestamp: "Added 3 days ago",
            subImage: pic2,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle: "Knot Just a Heart Braid | Cosmo's The Braid Up",
            timestamp: "Added 3 days ago",
            subImage: girl,
            sourceLogo: cosmopolitan,
            sourceName: 'Cosmopolitan'
          },
        ],
      },
    ]
  },
  {
    category: "News",
    categoryTitle: "In focus",
    list: [
      {
        image: stNLogo,
        labelTag: 'TRENDING',
        title: "Use These Simple Tips to Not Fall Victim to Tax Fraudsters",
        sourceName: 'Veuer',
        sourceLogo: veuer,
        timestamp: "Added 19 hours ago"
      },
      {
        image: ndNLogo,
        labelTag: 'TRENDING',
        title: 'Vacations Can Be a Teachable Experience for Kids',
        sourceName: 'Newsy',
        sourceLogo: newsy,
        timestamp: "Added 5 days ago"
      },
      {
        image: rdNLogo,
        labelTag: 'TRENDING',
        title: 'Gas masks and hazmat suits are flying off the shelves at survival gear companies over fears of...',
        sourceName: 'Insider',
        sourceLogo: insider,
        timestamp: "Added 21 hours ago"
      },
      {
        image: rthNLogo,
        labelTag: 'TRENDING',
        title: 'Experts Warn Rental Car Prices Will Continue To Climb',
        sourceName: 'Stringr',
        sourceLogo: stringr,
        timestamp: "Added 2 years ago"
      }
    ],
    subCategories: [
      {
        name: "TOP STORIES",
        secName: 'You may have missed',
        list: [
          {
            subTitle:
                "Heidi Montag Accuses Lady Gaga Of Sabotaging Her Music Career And Stealing Her Song",
            timestamp: "Added 2 days ago",
            subImage: vip,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle:
                "Astrophysicist Explains Black Holes in 5 Levels of Difficulty",
            timestamp: "Added 3 days ago",
            subImage: pic2,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle: "Knot Just a Heart Braid | Cosmo's The Braid Up",
            timestamp: "Added 3 days ago",
            subImage: girl,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
        ],
      },
    ],
  },
  {
    category: "Sport",
    categoryTitle: "Top sports moments",
    list: [
      {
        image: stSLogo,
        labelTag: 'TRENDING',
        title: "St Peter's Upsets Purdue to advance to Elite Eight",
        sourceName: 'Sports Illustrated',
        sourceLogo: sportsIlustrated,
        timestamp: "Added 9 hours ago"
      },
      {
        image: ndSLogo,
        labelTag: 'TRENDING',
        title: "Ray Allen Says Ending 'Beef' w/ Kevin Garnett Was Best Thing for Celtics Organization",
        sourceName: 'CLNS Media Sports Network',
        sourceLogo: clns,
        timestamp: "Added 10 hours ago"
      },
      {
        image: rdSLogo,
        labelTag: 'TRENDING',
        title: 'Paxton Land Sophomore Varsity Highlights',
        sourceName: 'Fan Nation',
        sourceLogo: fan,
        timestamp: "Added last month"
      },
      {
        image: rthSLogo,
        labelTag: 'TRENDING',
        title: 'Steph Curry Injury Update',
        sourceName: 'SportsGrid',
        sourceLogo: sportsgrid,
        timestamp: "Added 10 hours ago"
      },
    ],
    subCategories: [
      {
        name: "DISCOVER VIDEOS",
        secName: 'From Stringr',
        list: [
          {
            subTitle:
                "Heidi Montag Accuses Lady Gaga Of Sabotaging Her Music Career And Stealing Her Song",
            timestamp: "Added 2 days ago",
            subImage: vip,
            sourceLogo: cosmopolitan,
            sourceName: 'Cosmopolitan'
          },
          {
            subTitle:
                "Astrophysicist Explains Black Holes in 5 Levels of Difficulty",
            timestamp: "Added 3 days ago",
            subImage: pic2,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle: "Knot Just a Heart Braid | Cosmo's The Braid Up",
            timestamp: "Added 3 days ago",
            subImage: girl,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
        ],
      },
      {
        name:'DISCOVER VIDEOS',
        secName: "From Brut America",
        list: [
          {
            subTitle:
                "U2 Scripted Series From J.J. Abrams in the Works at Netflix | THR News",
            timestamp: "Added 9 days ago",
            subImage: group,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle:
                "Elie Mystal says the Constitution is deeply flawed in his book Let Me Retort",
            timestamp: "Added 4 days ago",
            subImage: men,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle: "Christian Gates Answers Fans' Questions",
            timestamp: "Added 4 days ago",
            subImage: group,
            sourceLogo: cosmopolitan,
            sourceName: 'Cosmopolitan'
          },
        ],
      },
    ],
  },
  {
    category: "Enterteiment",
    categoryTitle: "In the spotlight",
    list: [
      {
        image: stELogo,
        labelTag: 'TRENDING',
        title: "Bridgerton’s Simone Ashley Spills the Tea on Her Life & Kate Sharma",
        sourceName: 'Glamour',
        sourceLogo: glamour,
        timestamp: "Added 19 hours ago",
        seeMore: "See more about",
        buttonName: "BRIDGERTON"
      },
      {
        image: ndELogo,
        labelTag: 'TRENDING',
        title: "How Euphoria’s Storm Reid Gets Glowing Skin and Perfects Her Signature Winged Liner",
        sourceName: 'Vogue',
        sourceLogo: vogue,
        timestamp: "Added 3 days ago",
        seeMore: "See more about",
        buttonName: "EUPHORIA (AMERICAN TV SERIES..."
      },
      {
        image: rdELogo,
        labelTag: 'TRENDING',
        title: "‘No Way Home,’ ‘Squid Game’ and ‘WandaVision’ Win at Critics Choice Super Awards | THR News",
        sourceName: 'The Hollywood Reporter',
        sourceLogo: hollywood,
        timestamp: "Added 8 days ago"
      },
      {
        image: rthELogo,
        labelTag: 'TRENDING',
        title: 'Oscar Predictions | Two Shot',
        sourceName: 'Deadline',
        sourceLogo: deadline,
        timestamp: "Added yesterday"
      },
    ],
    subCategories: [
      {
        name: "DISCOVER VIDEOS",
        secName: 'From The Hollywood Reporter',
        list: [
          {
            subTitle:
                "Heidi Montag Accuses Lady Gaga Of Sabotaging Her Music Career And Stealing Her Song",
            timestamp: "Added 2 days ago",
            subImage: vip,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle:
                "Astrophysicist Explains Black Holes in 5 Levels of Difficulty",
            timestamp: "Added 3 days ago",
            subImage: pic2,
            sourceLogo: cosmopolitan,
            sourceName: 'Cosmopolitan'
          },
          {
            subTitle: "Knot Just a Heart Braid | Cosmo's The Braid Up",
            timestamp: "Added 3 days ago",
            subImage: girl,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
        ],
      },
      {
        name: "DISCOVER VIDEOS",
        secName: 'From esencemagazine',
        list:[
          {
            subTitle:
                "U2 Scripted Series From J.J. Abrams in the Works at Netflix | THR News",
            timestamp: "Added 9 days ago",
            subImage: group,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle:
                "Elie Mystal says the Constitution is deeply flawed in his book Let Me Retort",
            timestamp: "Added 4 days ago",
            subImage: men,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle: "Christian Gates Answers Fans' Questions",
            timestamp: "Added 4 days ago",
            subImage: men,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
        ],
      },
    ],
  },
  {
    category: "Music",
    categoryTitle: "Best in music",
    list: [
      {
        image: stMLogo,
        labelTag: 'TRENDING',
        title: 'Amber Liu Does ASMR with Her Favorite Snacks & Nintendo Switch',
        sourceName: 'Fuse',
        sourceLogo: fuse,
        timestamp: "Added 11 days ago"
      },
      {
        image: ndMLogo,
        labelTag: 'TRENDING',
        title: 'Hanging Out with GOON DES GARCONS* and Na-Kel Smith',
        sourceName: 'The FADER',
        sourceLogo: fader,
        timestamp: "Added 9 months ago"
      },
      {
        image: rdMLogo,
        labelTag: 'TRENDING',
        title: "First Stream: Machine Gun Kelly’s ‘Mainstream Sellout’ Drops, Ed Sheeran and J Balvin Collab & More...",
        sourceName: 'Billboard',
        sourceLogo: billboard,
        timestamp: "Added 14 hours ago",
        seeMore: "See more about",
        buttonName: "MACHINE GUN KELLY (MUSICIAN)"
      },
      {
        image: rthMLogo,
        labelTag: 'TRENDING',
        title: 'Chris Brown Sued For Allegedly Drugging and Raping a Woman in Miami | RS News.',
        sourceName: 'Rolling Stone',
        sourceLogo: rollingStones,
        timestamp: "Added 2 months ago",
        seeMore: "See more about",
        buttonName: "CHRIS BROWN"
      },
    ],
    subCategories: [
      {
        name: "DISCOVER VIDEOS",
        secName: 'From Genius',
        list: [
          {
            subTitle:
                "Heidi Montag Accuses Lady Gaga Of Sabotaging Her Music Career And Stealing Her Song",
            timestamp: "Added 2 days ago",
            subImage: vip,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle:
                "Astrophysicist Explains Black Holes in 5 Levels of Difficulty",
            timestamp: "Added 3 days ago",
            subImage: pic2,
            sourceLogo: wired,
            sourceName: 'Wired'
          },
          {
            subTitle: "Knot Just a Heart Braid | Cosmo's The Braid Up",
            timestamp: "Added 3 days ago",
            subImage: girl,
            sourceLogo: cosmopolitan,
            sourceName: 'Cosmopolitan'
          },
        ],
      },
      {
        name: "DISCOVER VIDEOS",
        secName: 'From Rolling Stone',
        list: [
          {
            subTitle:
                "U2 Scripted Series From J.J. Abrams in the Works at Netflix | THR News",
            timestamp: "Added 9 days ago",
            subImage: group,
            sourceLogo: cosmopolitan,
            sourceName: 'Cosmopolitan'
          },
          {
            subTitle:
                "Elie Mystal says the Constitution is deeply flawed in his book Let Me Retort",
            timestamp: "Added 4 days ago",
            subImage: men,
            sourceLogo: cosmopolitan,
            sourceName: 'Cosmopolitan'
          },
          {
            subTitle: "Christian Gates Answers Fans' Questions",
            timestamp: "Added 4 days ago",
            subImage: men,
            sourceLogo: cosmopolitan,
            sourceName: 'Cosmopolitan'
          },
        ],
      },
    ],
  },
];

export default data;