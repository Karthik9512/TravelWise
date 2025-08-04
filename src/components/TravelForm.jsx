import { useState } from 'react'
import {
  TextField,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Box,
  Chip,
} from '@mui/material'
import {
  FlightTakeoff,
  LocationOn,
  AttachMoney,
  Schedule,
  Interests,
  Style
} from '@mui/icons-material'

const TravelForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    departureCity: '',
    destination: '',
    budget: [500, 2000],
    duration: 2,
    interests: [],
    travelStyle: 'balanced'
  })

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    })
  }

  const handleBudgetChange = (event, newValue) => {
    setFormData({
      ...formData,
      budget: newValue
    })
  }

  const handleInterestToggle = (interest) => () => {
    const currentInterests = formData.interests
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter(i => i !== interest)
      : [...currentInterests, interest]

    setFormData({
      ...formData,
      interests: newInterests
    })
  }

  const interests = [
    'Culture',
    'Food',
    'Nature',
    'Adventure',
    'Shopping',
    'Relaxation',
    'History',
    'Photography'
  ]

  return (
    <Box component="form" onSubmit={(e) => {
      e.preventDefault()
      onSubmit(formData)
    }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <FlightTakeoff color="primary" />
            <Typography variant="subtitle1">Departure City</Typography>
          </Box>
          <TextField
            fullWidth
            required
            placeholder="Enter your departure city"
            value={formData.departureCity}
            onChange={handleChange('departureCity')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <LocationOn color="primary" />
            <Typography variant="subtitle1">Destination (Optional)</Typography>
          </Box>
          <TextField
            fullWidth
            placeholder="Where would you like to go?"
            value={formData.destination}
            onChange={handleChange('destination')}
          />
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <AttachMoney color="primary" />
            <Typography variant="subtitle1">Budget Range ($)</Typography>
          </Box>
          <Slider
            value={formData.budget}
            onChange={handleBudgetChange}
            valueLabelDisplay="auto"
            min={100}
            max={5000}
            step={100}
          />
          <Box display="flex" justifyContent="space-between">
            <Typography color="text.secondary">${formData.budget[0]}</Typography>
            <Typography color="text.secondary">${formData.budget[1]}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Schedule color="primary" />
            <Typography variant="subtitle1">Duration (Days)</Typography>
          </Box>
          <Slider
            value={formData.duration}
            onChange={(e, value) => handleChange('duration')({ target: { value } })}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={2}
            max={5}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Style color="primary" />
            <Typography variant="subtitle1">Travel Style</Typography>
          </Box>
          <FormControl fullWidth>
            <Select
              value={formData.travelStyle}
              onChange={handleChange('travelStyle')}
            >
              <MenuItem value="budget">Budget-Friendly</MenuItem>
              <MenuItem value="balanced">Balanced</MenuItem>
              <MenuItem value="luxury">Luxury</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Interests color="primary" />
            <Typography variant="subtitle1">Interests</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {interests.map((interest) => (
              <Chip
                key={interest}
                label={interest}
                onClick={handleInterestToggle(interest)}
                color={formData.interests.includes(interest) ? "primary" : "default"}
                variant={formData.interests.includes(interest) ? "filled" : "outlined"}
              />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            className="button-primary"
          >
            Generate Travel Plan
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TravelForm