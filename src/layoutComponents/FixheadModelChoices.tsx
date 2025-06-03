import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Fixhead.module.css';


type Props = {
  selected: string;
  onSelect: (model: string) => void;
};


export default function ModelChoices({ selected, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };


    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className={styles.models} ref={ref}>
      <span className={styles.modelChoice} onClick={() => setOpen(!open)}>
        {selected} &nbsp;&nbsp;
        <span className="iconfont icon-arrow"></span>
      </span>


      {open && (
        <div className={styles.modelChoose}>
          {[
              {name:'M1-o1',desc:'Expert in Categorized Delivery.'},
              {name:'M1-o2',desc:'Expert in Recommendation.'},
              {name:'M1-o3',desc:'Expert in User Modeling.'}].map((model) => (
            <div key={model.name}
                 className={styles.modelOptions}
                 onClick={() => {
              onSelect(model.name);
              setOpen(false);
            }}>
                <div className={styles.modelName}>{model.name}</div>
                <div className={styles.modelDesc}>{model.desc}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
