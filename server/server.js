import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Mock data
let leads = []
const testimonials = [
  { name: 'Aisha Khan', text: 'I scored an overall band 8.0! The mock tests and feedback were spot on.', avatar: 'https://i.pravatar.cc/100?img=12' },
  { name: 'Daniel Chen', text: 'Speaking sessions boosted my confidence. The tips were practical and effective.', avatar: 'https://i.pravatar.cc/100?img=32' },
  { name: 'Sofia Garcia', text: 'AI Band Score helped me track progress every week. Highly recommended!', avatar: 'https://i.pravatar.cc/100?img=45' },
]

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.get('/api/testimonials', (req, res) => {
  res.json(testimonials)
})

app.post('/api/lead', (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }
  const entry = { id: Date.now().toString(), name, email, message: message || '' }
  leads.push(entry)
  // In a real app you might store in DB or send an email/notification.
  res.status(201).json({ ok: true, leadId: entry.id })
})

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
})
