import { useState } from 'react'
import { Stack, TextField, PrimaryButton, ChoiceGroup, IChoiceGroupOption } from '@fluentui/react'
import styles from './UserInfoForm.module.css'

interface UserInfo {
  name: string;
  age: string;
  gender: string;
}

interface Props {
  onSubmit: (userInfo: UserInfo) => void;
}

const genderOptions: IChoiceGroupOption[] = [
  { key: 'male', text: 'Male' },
  { key: 'female', text: 'Female' },
  { key: 'other', text: 'Other' }
];

export const UserInfoForm = ({ onSubmit }: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    age: '',
    gender: 'male'
  });

  const [errors, setErrors] = useState({
    name: false,
    age: false
  });

  const handleChange = (field: keyof UserInfo, value: string) => {
    setUserInfo({
      ...userInfo,
      [field]: value
    });
    
    // Clear error when user types
    if (errors[field as keyof typeof errors]) {
      setErrors({
        ...errors,
        [field]: false
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: !userInfo.name.trim(),
      age: !userInfo.age.trim() || isNaN(Number(userInfo.age)) || Number(userInfo.age) <= 0
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(userInfo);
    }
  };

  return (
    <Stack className={styles.userInfoContainer}>
      <h2 className={styles.formTitle}>Welcome to Syncmed Chat</h2>
      <p className={styles.formDescription}>
        Please provide your information to get started
      </p>
      
      <div className={styles.formField}>
        <TextField
          label="Name"
          required
          value={userInfo.name}
          onChange={(_, value) => handleChange('name', value || '')}
          errorMessage={errors.name ? 'Name is required' : undefined}
        />
      </div>
      
      <div className={styles.formField}>
        <TextField
          label="Age"
          required
          type="number"
          value={userInfo.age}
          onChange={(_, value) => handleChange('age', value || '')}
          errorMessage={errors.age ? 'Please enter a valid age' : undefined}
        />
      </div>
      
      <div className={styles.formField}>
        <label className={styles.fieldLabel}>Gender</label>
        <ChoiceGroup
          selectedKey={userInfo.gender}
          options={genderOptions}
          onChange={(_, option) => option && handleChange('gender', option.key)}
          className={styles.radioButtons}
        />
      </div>
      
      <PrimaryButton
        className={styles.submitButton}
        onClick={handleSubmit}
        text="Start Chat"
      />
    </Stack>
  );
};