import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Clock, ChevronDown } from 'lucide-react';

const TimePickerDropdown = ({ value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = ['00', '15', '30', '45'];
  const periods = ['AM', 'PM'];

  // Parse current value
  const parseTime = (timeStr) => {
    if (!timeStr) return { hour: '09', minute: '00', period: 'AM' };
    const [time, period] = timeStr.split(' ');
    const [hour, minute] = time.split(':');
    return { hour, minute, period };
  };

  const [selected, setSelected] = useState(parseTime(value));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (field, val) => {
    const newSelected = { ...selected, [field]: val };
    setSelected(newSelected);
    onChange(`${newSelected.hour}:${newSelected.minute} ${newSelected.period}`);
  };

  return (
    <div className="flex items-center gap-2 flex-1" ref={dropdownRef}>
      <label className="text-xs font-medium text-gray-600 w-12">{label}</label>
      <div className="relative flex-1">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white flex items-center justify-between"
        >
          <span>{`${selected.hour}:${selected.minute} ${selected.period}`}</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="flex divide-x">
              {/* Hours */}
              <div className="flex-1 max-h-48 overflow-y-auto">
                <div className="text-xs font-semibold text-gray-500 px-2 py-1 bg-gray-50 sticky top-0">Hour</div>
                {hours.map(h => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => handleChange('hour', h)}
                    className={`w-full px-3 py-2 text-sm hover:bg-teal-50 text-left ${
                      selected.hour === h ? 'bg-teal-100 text-teal-700 font-medium' : 'text-gray-700'
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>

              {/* Minutes */}
              <div className="flex-1 max-h-48 overflow-y-auto">
                <div className="text-xs font-semibold text-gray-500 px-2 py-1 bg-gray-50 sticky top-0">Min</div>
                {minutes.map(m => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => handleChange('minute', m)}
                    className={`w-full px-3 py-2 text-sm hover:bg-teal-50 text-left ${
                      selected.minute === m ? 'bg-teal-100 text-teal-700 font-medium' : 'text-gray-700'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* AM/PM */}
              <div className="flex-1 max-h-48 overflow-y-auto">
                <div className="text-xs font-semibold text-gray-500 px-2 py-1 bg-gray-50 sticky top-0">Period</div>
                {periods.map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handleChange('period', p)}
                    className={`w-full px-3 py-2 text-sm hover:bg-teal-50 text-left ${
                      selected.period === p ? 'bg-teal-100 text-teal-700 font-medium' : 'text-gray-700'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [hours, setHours] = useState({
    monday: { isOpen: true, openTime: '02:00 PM', closeTime: '07:00 AM' },
    tuesday: { isOpen: true, openTime: '02:00 AM', closeTime: '07:00 PM' },
    wednesday: { isOpen: true, openTime: '02:00 PM', closeTime: '07:00 PM' },
    thursday: { isOpen: true, openTime: '02:00 AM', closeTime: '07:00 PM' },
    friday: { isOpen: true, openTime: '02:00 PM', closeTime: '07:00 PM' },
    saturday: { isOpen: true, openTime: '02:00 AM', closeTime: '07:00 PM' },
    sunday: { isOpen: false, openTime: '09:00 AM', closeTime: '05:00 PM' }
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHours();
  }, []);

  // const fetchHours = async () => {
  //   try {
  //     const docRef = doc(db, 'settings', 'hoursOfOperation');
  //     const docSnap = await getDoc(docRef);
      
  //     if (docSnap.exists()) {
  //       const data = docSnap.data();
  //       // Convert string format to our state format
  //       const parsedHours = {};
  //       Object.keys(data).forEach(day => {
  //         if (data[day] === 'Closed') {
  //           parsedHours[day] = { isOpen: false, openTime: '09:00 AM', closeTime: '05:00 PM' };
  //         } else {
  //           // Parse "02:00 P.M. – 07:00 P.M." format
  //           const match = data[day].match(/(\d{2}:\d{2})\s+(A\.M\.|P\.M\.)\s+–\s+(\d{2}:\d{2})\s+(A\.M\.|P\.M\.)/);
  //           if (match) {
  //             const openTime = `${match[1]} ${match[2].replace('.', '')}`;
  //             const closeTime = `${match[3]} ${match[4].replace('.', '')}`;
  //             parsedHours[day] = { isOpen: true, openTime, closeTime };
  //           }
  //         }
  //       });
  //       setHours(parsedHours);
  //     }
  //   } catch (err) {
  //     console.error('Error fetching hours:', err);
  //   }
  // };

  const fetchHours = async () => {
    try {
      const docRef = doc(db, 'settings', 'hoursOfOperation');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        // Start with default hours structure
        const defaultHours = {
          monday: { isOpen: true, openTime: '09:00 AM', closeTime: '05:00 PM' },
          tuesday: { isOpen: true, openTime: '09:00 AM', closeTime: '05:00 PM' },
          wednesday: { isOpen: true, openTime: '09:00 AM', closeTime: '05:00 PM' },
          thursday: { isOpen: true, openTime: '09:00 AM', closeTime: '05:00 PM' },
          friday: { isOpen: true, openTime: '09:00 AM', closeTime: '05:00 PM' },
          saturday: { isOpen: true, openTime: '09:00 AM', closeTime: '05:00 PM' },
          sunday: { isOpen: false, openTime: '09:00 AM', closeTime: '05:00 PM' }
        };
        
        // Convert string format to our state format
        const parsedHours = { ...defaultHours };
        Object.keys(data).forEach(day => {
          if (data[day] === 'Closed') {
            parsedHours[day] = { isOpen: false, openTime: '09:00 AM', closeTime: '05:00 PM' };
          } else {
            // Parse "02:00 P.M. – 07:00 P.M." format
            const match = data[day].match(/(\d{2}:\d{2})\s+(A\.M\.|P\.M\.)\s+–\s+(\d{2}:\d{2})\s+(A\.M\.|P\.M\.)/);
            if (match) {
              const openTime = `${match[1]} ${match[2].replace(/\./g, '')}`;
              const closeTime = `${match[3]} ${match[4].replace(/\./g, '')}`;
              parsedHours[day] = { isOpen: true, openTime, closeTime };
            }
          }
        });
        setHours(parsedHours);
      }
    } catch (err) {
      console.error('Error fetching hours:', err);
    }
  };
  const handleDayChange = (day, field, value) => {
    setHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value
      }
    }));
  };

  const formatTimeDisplay = (dayData) => {
    if (!dayData.isOpen) return 'Closed';
    // Convert "02:00 PM" to "02:00 P.M." format for Firebase
    const formatWithDots = (time) => time.replace('AM', 'A.M.').replace('PM', 'P.M.');
    return `${formatWithDots(dayData.openTime)} – ${formatWithDots(dayData.closeTime)}`;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    // Validate times
    for (const [day, data] of Object.entries(hours)) {
      if (data.isOpen) {
        if (data.openTime === data.closeTime) {
          setError(`Invalid hours for ${day}: Opening and closing times cannot be the same`);
          setLoading(false);
          return;
        }
      }
    }

    try {
      // Convert to display format for Firebase
      const formattedHours = {};
      Object.keys(hours).forEach(day => {
        formattedHours[day] = formatTimeDisplay(hours[day]);
      });
      
      const docRef = doc(db, 'settings', 'hoursOfOperation');
      await setDoc(docRef, formattedHours);
      
      setSuccess('Hours of operation updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to update hours. Please try again.');
      console.error('Error updating hours:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-teal-600 text-white flex justify-between items-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-white text-teal-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Hours of Operation
            </h2>

            {success && (
              <div className="mb-4 bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                <span className="text-green-600">✓</span>
                {success}
              </div>
            )}

            {error && (
              <div className="mb-4 bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="space-y-3">
              {days.map(({ key, label }) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center gap-3 sm:w-36">
                      <input
                        type="checkbox"
                        id={`${key}-open`}
                        checked={hours[key].isOpen}
                        onChange={(e) => handleDayChange(key, 'isOpen', e.target.checked)}
                        className="w-4 h-4 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                      />
                      <label htmlFor={`${key}-open`} className="text-sm font-medium text-gray-900 cursor-pointer">
                        {label}
                      </label>
                    </div>

                    {hours[key].isOpen ? (
                      <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <TimePickerDropdown
                          value={hours[key].openTime}
                          onChange={(val) => handleDayChange(key, 'openTime', val)}
                          label="Open"
                        />
                        
                        <span className="text-gray-400 hidden sm:block self-center">→</span>
                        
                        <TimePickerDropdown
                          value={hours[key].closeTime}
                          onChange={(val) => handleDayChange(key, 'closeTime', val)}
                          label="Close"
                        />
                      </div>
                    ) : (
                      <div className="flex-1 text-sm text-gray-500 italic">
                        Closed
                      </div>
                    )}
                  </div>

                  {hours[key].isOpen && (
                    <div className="mt-3 ml-0 sm:ml-36 text-xs text-gray-600 bg-gray-50 px-3 py-1.5 rounded inline-block">
                      <span className="font-medium">Preview:</span> {formatTimeDisplay(hours[key])}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">
            ℹ️ How it works:
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Click on any time field to open the time picker</li>
            <li>• Minutes are in 15-minute intervals (00, 15, 30, 45) for consistency</li>
            <li>• Uncheck the box to mark a day as closed</li>
            <li>• Preview shows exactly how times will appear to customers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;