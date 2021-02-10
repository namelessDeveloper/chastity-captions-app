import { Config } from "./types";

export const defaultConfig: Config = {
  type: "cyoa",
  sections: [
    {
      metadata: "CYOA Title",
      type: "none",
      items: [
        {
          parts:[
            {
              type:"text",
              body: "<i>Note:</i> Pick one of the mistresses below to be your keyholder. Each one of them offers you some points to spend on identifying your conditions afterwards"
            },
            {
              type:"title",
              text: "Choose Your Keyholder v5"
            },
            {
              type:"text",
              body: "<i>Note:</i> You can find more of such captions in our amazing subreddit here: <a href=\"https://www.reddit.com/r/chastitychoice\">https://www.reddit.com/r/chastitychoice<a/>"
            }
          ]
        }
      ]
    },
    {
      metadata: "Pick your mistress",
      type: "single",
      direction:"row",
      items: [
        {
          cost:15,
          direction:"column",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/p2J1fq6.png",
            },
            {
              type:"text",
              header:"Let's Gamble",
              body: "On your release day, we're gonna flip a coin. If it comes up heads, you can fuck me however you and your next lockup time halves. If it comes up tails, you get denied and your lockup time doubles."
            }
          ]
        },
        {
          cost:3,
          direction:"column",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/eUGbBU6.png"
            },
            {
              type:"text",
              header:"Ultimate Teasing",
              body: "Awww.. poor boy can't even get hard! Just image, if your dick wasn't locked up tight, you couldn've rammed it into my pussy, rape my mouth, or even fuck my soft boobs to your heart's content!"
            }
          ]
        },
        {
          cost:7,
          direction:"column",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/l0ytVRy.png"
            },
            {
              type:"text",
              header:"Under my Skirt",
              body: "Plant your nose right against my croth while I cover you under my skirt! Just imagine how amazing it'd feel to get smothered like this on your release day, when your cock can grow full outsite its cage."
            }
          ]
        },
        {
          cost:9,
          direction:"column",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/mi2WWqK.pngg"
            },
            {
              type:"text",
              header:"Open Your Mouth",
              body: "You have to spend the entire night with my dirty socks stuffed into your mouth, sealed shut with my layer of duct tape, as I place my shoes on your nose, otherwise that day in chastity won't count for you."
            }
          ]
        },
        {
          cost:1,
          direction:"column",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/DLZ7JZK.png"
            },
            {
              type:"text",
              header:"Teenage Love",
              body: "I'm so happy you agreed to wear that chastity belt, you know how jelous I get when you're talking to all those other girls. When we're along together, I'm gonna unlock you and make it all worthwhile!"
            }
          ]
        },
        {
          cost:5,
          direction:"column",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/8FBMaYr.png"
            },
            {
              type:"text",
              header:"No Room for Laziness",
              body: "I expect the floor and the furniture to shine by the time you're finished cleaning the house. If I notice even a single dirt of grime, you better kiss your orgasms goodbye for a long time."
            }
          ]
        },
        {
          cost:11,
          direction:"column",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/8yiVmJT.png"
            },
            {
              type:"text",
              header:"No Precum allowed!",
              body: "I'll get your face under my skirt while watching your locked cock if I see even a single drop of precum dripping out of your cage, you will remain locked up tight until the next time we can try it again."
            }
          ]
        },
        {
          cost:13,
          direction:"column",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/qRm2LYZ.png"
            },
            {
              type:"text",
              header:"Wife of your Dreams",
              body: "Now I'm all yours hunnie! You can poud my ass, pussy, mouth, and fuck my tits, thighs, and gorgeous feet, so what are you waiting for? Why are you hesitating to put on the strapon over your caged cock?"
            }
          ]
        },
      ]
    },
    {
      metadata: "Pick your Device",
      type: "single",
      direction:"row",
      items: [
        {
          parts: [
            {
              type:"title",
              text: "Choose Your Device: The type of chastity belt you'll be wearing"
            }
          ]
        }
      ]
    },
    {
      metadata: "Pick your Device single",
      type: "single",
      direction:"row",
      items: [
        {
          cost:-5,
          direction:"row",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/IEtDL6X.png",
              width: 90,
            },
            {
              type:"text",
              header:"Plastic",
            }
          ]
        },
        {
          cost:-3,
          direction:"row",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/SJDNa6n.png",
              width: 90,
            },
            {
              type:"text",
              header:"Metal",
            }
          ]
        },
        {
          cost:-1,
          direction:"row",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/RAOPeMN.png",
              width: 90,
            },
            {
              type:"text",
              header:"Extra Small",
            }
          ]
        },
        {
          cost:0,
          direction:"row",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/e5xXOoU.png",
              width: 90,
            },
            {
              type:"text",
              header:"Spiked",
            }
          ]
        },
      ]
    },
    {
      metadata: "Pick your release schedule",
      type: "single",
      direction:"row",
      items: [
        {
          parts: [
            {
              type:"title",
              text: "Release Schedule: The time you'll be wating between unlocks from your chastity device"
            }
          ]
        }
      ]
    },
    {
      metadata: "Pick your release schedule single",
      type: "single",
      direction:"row",
      items: [
        {
          cost:-10,
          parts:[
            {
              type:"text",
              header:"1 Week",
            }
          ]
        },
        {
          cost:-7,
          parts:[
            {
              type:"text",
              header:"1 Month",
            }
          ]
        },
        {
          cost:-5,
          parts:[
            {
              type:"text",
              header:"2 Months",
            }
          ]
        },
        {
          cost:-3,
          parts:[
            {
              type:"text",
              header:"3 Months",
            }
          ]
        },
        {
          cost:-1,
          parts:[
            {
              type:"text",
              header:"6 Months",
            }
          ]
        },
        {
          cost:0,
          parts:[
            {
              type:"text",
              header:"1 Year",
            }
          ]
        },
      ]
    },
    {
      metadata: "Pick your orgasm type",
      type: "single",
      direction:"row",
      items: [
        {
          parts: [
            {
              type:"title",
              text: "Choose How To Cum: The type of orgasm you'll get IF your keyholder allows"
            }
          ]
        }
      ]
    },
    {
      metadata: "Pick your orgasm type single",
      type: "single",
      direction:"row",
      items: [
        {
          cost:-10,
          parts:[
            {
              type:"text",
              header:"Full Orgasm",
            }
          ]
        },
        {
          cost:-3,
          parts:[
            {
              type:"text",
              header:"Ruined Orgasm",
            }
          ]
        },
        {
          cost:-1,
          parts:[
            {
              type:"text",
              header:"Prostate Orgasm",
            }
          ]
        },
        {
          cost:0,
          parts:[
            {
              type:"text",
              header:"no Orgasm",
            }
          ]
        },
      ]
    },
    {
      metadata: "Pick your additional accessory",
      type: "single",
      direction:"row",
      items: [
        {
          parts: [
            {
              type:"title",
              text: "Choose Your Wearing Tool: What you'll weare besides your chastity cage"
            }
          ]
        }
      ]
    },
    {
      metadata: "Pick your additional accessory single",
      type: "single",
      direction:"row",
      items: [
        {
          cost:-10,
          direction:"row",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/D9zLs9j.png",
              width: 90,
            },
            {
              type:"text",
              header:"Panties",
            }
          ]
        },
        {
          cost:-3,
          direction:"row",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/RQz1c4b.png",
              width: 90,
            },
            {
              type:"text",
              header:"Vibrating Buttplug",
            }
          ]
        },
        {
          cost:-1,
          direction:"row",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/WAQmVfa.png",
              width: 90,
            },
            {
              type:"text",
              header:"Huge Dildo",
            }
          ]
        },
        {
          cost:0,
          direction:"row",
          width:200,
          parts:[
            {
              type:"image",
              src: "https://i.imgur.com/kiA2k8R.png",
              width: 90,
            },
            {
              type:"text",
              header:"Uretheral Beads",
            }
          ]
        },
      ]
    },
    {
      metadata: "Extra Points",
      type: "single",
      direction:"row",
      items: [
        {
          parts: [
            {
              type:"title",
              text: "<i>Gain Extra Points</i>: You're free to choose any of the below options without limit"
            }
          ]
        }
      ]
    },
    {
      metadata: "Pick your mistress",
      type: "single",
      direction:"row",
      items: [
        {
          cost:1,
          direction:"column",
          width:200,
          parts:[
            {
              type:"text",
              header:"Post Orgasm Torture",
            },
            {
              type:"image",
              src: "https://i.imgur.com/3aTcLHR.png"
            }
          ]
        },
        {
          cost:1,
          direction:"column",
          width:200,
          parts:[
            {
              type:"text",
              header:"Daily Spanking",
            },
            {
              type:"image",
              src: "https://i.imgur.com/iHywpGO.png"
            }
          ]
        },
        {
          cost:1,
          direction:"column",
          width:200,
          parts:[
            {
              type:"text",
              header:"Morning Blowjobs",
            },
            {
              type:"image",
              src: "https://i.imgur.com/RbGSuci.png"
            }
          ]
        },
        {
          cost:3,
          direction:"column",
          width:200,
          parts:[
            {
              type:"text",
              header:"Cuckold Fantasy",
            },
            {
              type:"image",
              src: "https://i.imgur.com/QAE9UEL.png"
            }
          ]
        },
        {
          cost:6,
          direction:"column",
          width:200,
          parts:[
            {
              type:"text",
              header:"Toilet Slavery(Scat)",
            },
            {
              type:"image",
              src: "https://i.imgur.com/hum86IG.png"
            }
          ]
        },
        {
          cost:2,
          direction:"column",
          width:200,
          parts:[
            {
              type:"text",
              header:"Sniffing her Fats",
            },
            {
              type:"image",
              src: "https://i.imgur.com/K9vimLU.png"
            }
          ]
        },
        {
          cost:2,
          direction:"column",
          width:200,
          parts:[
            {
              type:"text",
              header:"Drinking her Piss",
            },
            {
              type:"image",
              src: "https://i.imgur.com/kdz1slD.png"
            }
          ]
        },
        {
          cost:4,
          direction:"column",
          width:200,
          parts:[
            {
              type:"text",
              header:"<b>Harsh</b> CBT",
            },
            {
              type:"image",
              src: "https://i.imgur.com/qELHI60.png"
            }
          ]
        },
      ]
    }
  ]
}