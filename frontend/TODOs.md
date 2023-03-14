**Specific date range**
() => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      maxDate={addDays(new Date(), 5)}
      placeholderText="Select a date between today and 5 days in the future"
    />
  );
};

**Select Time Only**
() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
};


Specific Time Range
edit icon
() => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 17)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      minTime={setHours(setMinutes(new Date(), 0), 17)}
      maxTime={setHours(setMinutes(new Date(), 30), 20)}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};
() => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 17)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      minTime={setHours(setMinutes(new Date(), 0), 17)}
      maxTime={setHours(setMinutes(new Date(), 30), 20)}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};
March 14, 2023 5:30 PM