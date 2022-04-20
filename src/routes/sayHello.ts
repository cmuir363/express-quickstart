import express from "express"
import twilio from "twilio"

const router = express.Router()


const VoiceResponse = twilio.twiml.VoiceResponse

router.post('/', (req, res) => {
  const response = new VoiceResponse()
  response.say("Hello World from Twilio!!");
  res.send(response.toString())
});

export default router