'use client'
// components/CustomSelect.tsx
import React, { useState, useEffect } from 'react';
import styles from './customSelect.module.css';

interface Option {
   label: string;
   number: string;
}

interface CustomSelectProps {
   label: string;
   optionsData: Option[];
   onSelectChange: (data: { label: string; selectedOption: string | null; checkedOptions: Record<string, boolean> }) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, optionsData, onSelectChange }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [checkedOptions, setCheckedOptions] = useState<Record<string, boolean>>({});
   const [selectedOption, setSelectedOption] = useState<string | null>(null);

   const toggleOptions = () => {
      setIsOpen(!isOpen);
   };

   const handleCheckboxChange = (optionLabel: string) => {
      setCheckedOptions((prev) => ({
         ...prev,
         [optionLabel]: !prev[optionLabel],
      }));

      setSelectedOption(optionLabel);
   };

   useEffect(() => {
      onSelectChange({ label, selectedOption, checkedOptions });
   }, [selectedOption, checkedOptions, label, onSelectChange]);

   return (
      <div className={styles.customSelect}>
         <div className={`${styles.option} ${isOpen && styles.open}`} onClick={toggleOptions}>
            <label>{label}</label>
            <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
         </div>
         {isOpen && (
            <div className={styles.optionsContainer}>
               {optionsData.map((option, index) => (
                  <div
                     className={`${styles.option} ${selectedOption === option.label && styles.selectedOption}`}
                     key={index}
                     onClick={() => handleCheckboxChange(option.label)}
                  >
                     <input type="checkbox" checked={checkedOptions[option.label]} />
                     <label>{option.label}</label>
                     <span className={styles.optionNumber}>{option.number}</span>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default CustomSelect;
