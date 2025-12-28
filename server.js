const express = require("express");
const events = require("./events.json");

const app = express();
app.use(express.json());

app.post("/getEvent", (req, res) => {
  const eventId = req.body.event_id;

  if (!eventId || !events[eventId]) {
    return res.json({
      error: "Event not found",
      message: "Invalid or missing event_id"
    });
  }

  res.json(events[eventId]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});