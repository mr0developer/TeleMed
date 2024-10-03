// Get Doctor Profile
const getDoctorProfile = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const res = await fetch('http://localhost:3000/api/doctors/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await res.json();
      if (res.ok) {
        document.getElementById('doctor-name').textContent = data.name;
        document.getElementById('doctor-specialization').textContent = data.specialization;
        document.getElementById('doctor-availability').value = data.availability;
      } else {
        alert('Failed to load doctor profile');
      }
    } catch (error) {
      console.error('Error loading doctor profile:', error);
    }
  };
  
  // Update Doctor Availability
  document.getElementById('availability-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const availability = document.getElementById('doctor-availability').value;
  
    try {
      const res = await fetch('http://localhost:3000/api/doctors/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ availability })
      });
  
      if (res.ok) {
        alert('Availability updated successfully');
      } else {
        alert('Failed to update availability');
      }
    } catch (error) {
      console.error('Error updating availability:', error);
    }
  });
  