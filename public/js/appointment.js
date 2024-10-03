// Book an Appointment
document.getElementById('appointment-form').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const doctorId = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;
  
    try {
      const res = await fetch('http://localhost:3000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ doctorId, appointmentDate, appointmentTime })
      });
  
      if (res.ok) {
        alert('Appointment booked successfully');
      } else {
        alert('Failed to book appointment');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  });
  
  // Get Appointments
  const getAppointments = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const res = await fetch('http://localhost:3000/api/appointments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await res.json();
      if (res.ok) {
        const appointmentList = document.getElementById('appointment-list');
        appointmentList.innerHTML = '';
        data.appointments.forEach(appointment => {
          appointmentList.innerHTML += `<li>Doctor: ${appointment.doctorName} - Date: ${appointment.date} - Time: ${appointment.time} <button onclick="cancelAppointment(${appointment.id})">Cancel</button></li>`;
        });
      } else {
        alert('Failed to load appointments');
      }
    } catch (error) {
      console.error('Error loading appointments:', error);
    }
  };
  
  // Cancel Appointment
  const cancelAppointment = async (appointmentId) => {
    const token = localStorage.getItem('token');
  
    try {
      const res = await fetch(`http://localhost:3000/api/appointments/${appointmentId}/cancel`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (res.ok) {
        alert('Appointment canceled successfully');
        getAppointments(); // Reload the appointments
      } else {
        alert('Failed to cancel appointment');
      }
    } catch (error) {
      console.error('Error canceling appointment:', error);
    }
  };
  
  // Load appointments when the page loads
  window.onload = getAppointments;
  