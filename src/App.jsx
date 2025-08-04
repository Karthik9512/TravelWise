import { useState } from 'react'
import TravelForm from './components/TravelForm'
import TravelPlan from './components/TravelPlan'
import { Container, Typography, Box } from '@mui/material'

function App() {
  const [travelPlan, setTravelPlan] = useState(null)

  const generateTravelPlan = (formData) => {
    // Mock travel plan generation
    const plan = {
      destination: formData.destination || 'Paris, France',
      departure: formData.departureCity,
      accommodation: {
        name: formData.travelStyle === 'luxury' ? 'Grand Hotel Paris' :
             formData.travelStyle === 'balanced' ? 'Boutique Hotel Central' : 'Cozy Backpackers Hostel',
        type: formData.travelStyle === 'luxury' ? '5-star Hotel' :
              formData.travelStyle === 'balanced' ? '4-star Hotel' : 'Hostel',
        priceRange: formData.travelStyle === 'luxury' ? '$300-500/night' :
                    formData.travelStyle === 'balanced' ? '$150-250/night' : '$30-50/night'
      },
      transportation: {
        type: formData.travelStyle === 'luxury' ? 'Private Car Service' :
              formData.travelStyle === 'balanced' ? 'Mix of Metro and Taxi' : 'Public Transportation',
        details: 'Available throughout your stay'
      },
      itinerary: [
        {
          day: 1,
          activities: [
            { time: '09:00', activity: 'City Walking Tour', duration: '3 hours' },
            { time: '13:00', activity: 'Local Cuisine Lunch', duration: '1.5 hours' },
            { time: '15:00', activity: 'Museum Visit', duration: '2.5 hours' },
            { time: '19:00', activity: 'Seine River Dinner Cruise', duration: '2 hours' }
          ],
          meals: {
            breakfast: 'Hotel Breakfast',
            lunch: 'Local Bistro',
            dinner: 'River Cruise Restaurant'
          }
        },
        {
          day: 2,
          activities: [
            { time: '10:00', activity: 'Louvre Museum', duration: '4 hours' },
            { time: '15:00', activity: 'Shopping at Champs-Élysées', duration: '2 hours' },
            { time: '18:00', activity: 'Eiffel Tower Visit', duration: '2 hours' }
          ],
          meals: {
            breakfast: 'Local Café',
            lunch: 'Museum Café',
            dinner: 'Michelin Star Restaurant'
          }
        }
      ],
      tips: [
        'Always carry a valid ID and travel insurance',
        'Download offline maps for easy navigation',
        'Learn basic French phrases for better communication',
        'Book major attractions in advance to avoid queues'
      ]
    }
    setTravelPlan(plan)
  }

  return (
    <Container className="container">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" className="app-title">
          TravelWise
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
          Your Smart Travel Companion
        </Typography>
      </Box>
      
      <div className="card">
        <TravelForm onSubmit={generateTravelPlan} />
      </div>

      {travelPlan && (
        <div className="card travel-plan">
          <TravelPlan plan={travelPlan} />
        </div>
      )}
    </Container>
  )
}

export default App
