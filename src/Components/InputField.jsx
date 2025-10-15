

const InputField = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div style={styles.inputGroup}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
    
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: '500',
    textAlign: 'left', 
  },
  input: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    transition: 'border 0.3s ease',
  },
};

export default InputField;
