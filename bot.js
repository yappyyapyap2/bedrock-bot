const bedrock = require('bedrock-protocol')

const client = bedrock.createClient({
  host: "BedrockAether.aternos.me", // your Aternos IP
  port: 53569,                   // Bedrock default port
  username: "Online_Bot",            // any name you want
  offline: true,
  version: "1.26.33.2"
})

client.on('join', () => {
  console.log("Bot joined the server!")
})

client.on('text', (packet) => {
  console.log(`[CHAT] ${packet.message}`)
})

client.on('disconnect', (packet) => {
  console.log("Disconnected:", packet)
})
