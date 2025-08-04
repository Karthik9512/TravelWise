import {
  Typography,
  Box,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip
} from '@mui/material'
import {
  LocationOn,
  Flight,
  Hotel,
  DirectionsCar,
  Schedule,
  Restaurant,
  Lightbulb
} from '@mui/icons-material'

const TravelPlan = ({ plan }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
        Your Travel Plan
      </Typography>

      <Grid container spacing={3}>
        {/* Destination Overview */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: 'primary.light', color: 'white', borderRadius: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Flight />
                  <Typography variant="h6">{plan.departure}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display="flex" alignItems="center" gap={1}>
                  <LocationOn />
                  <Typography variant="h6">{plan.destination}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Accommodation */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Hotel color="primary" />
              <Typography variant="h6">Accommodation</Typography>
            </Box>
            <Typography variant="subtitle1" gutterBottom>
              {plan.accommodation.name}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              {plan.accommodation.type}
            </Typography>
            <Chip
              label={plan.accommodation.priceRange}
              size="small"
              color="primary"
              variant="outlined"
            />
          </Paper>
        </Grid>

        {/* Transportation */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <DirectionsCar color="primary" />
              <Typography variant="h6">Transportation</Typography>
            </Box>
            <Typography variant="subtitle1" gutterBottom>
              {plan.transportation.type}
            </Typography>
            <Typography color="text.secondary">
              {plan.transportation.details}
            </Typography>
          </Paper>
        </Grid>

        {/* Itinerary */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            <Box display="flex" alignItems="center" gap={1}>
              <Schedule color="primary" />
              <span>Daily Itinerary</span>
            </Box>
          </Typography>
          
          {plan.itinerary.map((day) => (
            <Paper key={day.day} elevation={1} sx={{ p: 3, mb: 2 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Day {day.day}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <List>
                    {day.activities.map((activity, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 100 }}>
                          <Typography color="text.secondary">
                            {activity.time}
                          </Typography>
                        </ListItemIcon>
                        <ListItemText
                          primary={activity.activity}
                          secondary={`Duration: ${activity.duration}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <Restaurant color="primary" fontSize="small" />
                      <Typography variant="subtitle2">Meals</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Breakfast: {day.meals.breakfast}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Lunch: {day.meals.lunch}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Dinner: {day.meals.dinner}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>

        {/* Travel Tips */}
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Lightbulb color="primary" />
              <Typography variant="h6">Travel Tips</Typography>
            </Box>
            <List>
              {plan.tips.map((tip, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Chip
                      label={index + 1}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </ListItemIcon>
                  <ListItemText primary={tip} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TravelPlan