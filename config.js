const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349050309106";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_30_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEyLFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICA2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5DOUtHZjRYM1c3eWh6VjB0L056WjNyZjlUM1N5Y01xaFZEWHREaExYS1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFENmVvZ0JwVFJPSnpYMkpCV1dMUUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWE4OTBkMWQtZmVkMy00NjcxLWIwNzEtODA3OGRlNjY3MWMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMjIwLFxuICAgICAgNjUsXG4gICAgICAxMjAsXG4gICAgICAxMjQsXG4gICAgICAxMTYsXG4gICAgICA3MixcbiAgICAgIDI0MixcbiAgICAgIDE1MSxcbiAgICAgIDEwMCxcbiAgICAgIDIxNCxcbiAgICAgIDEwMCxcbiAgICAgIDExMixcbiAgICAgIDEyMCxcbiAgICAgIDI1MyxcbiAgICAgIDIyOSxcbiAgICAgIDc1LFxuICAgICAgMTIxLFxuICAgICAgNjIsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDE2MSxcbiAgICAgIDUzLFxuICAgICAgNDAsXG4gICAgICA2NSxcbiAgICAgIDE1LFxuICAgICAgMjAxLFxuICAgICAgMTYsXG4gICAgICAyNixcbiAgICAgIDIzLFxuICAgICAgNTUsXG4gICAgICAzNSxcbiAgICAgIDEyLFxuICAgICAgMTQzLFxuICAgICAgMTA3LFxuICAgICAgODgsXG4gICAgICAxMTksXG4gICAgICAxNDksXG4gICAgICAxNTQsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjZYTjg4S1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTAzMDkxMDY6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIYXBweSBMb25lcnMgQmxvZ1wiLFxuICAgIFwibGlkXCI6IFwiMjIxMTA1MzM1ODM2ODA2OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmc3RNQUNFS3VKc3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVTNPQjhhL0kvbm05TExBR2Y5RkZkdk52SFJ1aXBxdXg3bVUvcGRCM1BRTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6UlVVYmsrNEJWQXFjcG1ydVNRb3RyK2Q0OWQvRHB5YWJDNEFvVklmVTlRVFlIV1Z1cUtYVThhbmFXS0xCTW11UnF6NXNQYnNMb1FQK2drTTNwRUdBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3QmtwOHV4S2YwZUxlZ0VBQ3pYSjRadVg0SXFDVzNPbEJEWGhNVTl6MXQ2cDRNNTJzd0RhZ0l1cmFBT2YzWlVFV0Nod2UzYWtyOTB3WmVsRE9IZ3BCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUwMzA5MTA2OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ4NTAzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1yTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXJNLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWpublRkK09XZWxFUk9NNVg1UGFWc0VPbHZCU25WUEQ1bnpjd0pWNEZYUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzE5NTQ0NTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0ODQ1MjA4MzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Happy Loner",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "LonersAi",
  ownername:process.env.OWNER_NAME|| "Loners Ai Bot",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
