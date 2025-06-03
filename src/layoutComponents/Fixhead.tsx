import styles from '../styles/Fixhead.module.css'
import {useState} from "react";
import ModelChoose from '../layoutComponents/FixheadModelChoices.tsx'

export default function Fixhead(){
    const [selectModel, setSelectModel] = useState('M1-o1');

    return (
        <>
        <div className={styles.OuterContainer}>
            <div className={styles.ModuleContainer}>
                <div className={styles.models}>
                    <ModelChoose selected={selectModel} onSelect={setSelectModel} />
                </div>

                <div className={styles.otherSettings}>
                    <div className={styles.tutorial}>
                          <span className={"iconfont icon-tutorial"}></span>
                    </div>
                    <div className={styles.language}>
                        <span className={"iconfont icon-language"}></span>
                    </div>
                    <div className={styles.settings}>
                        <span className={"iconfont icon-settings"}></span>
                    </div>

                </div>


            </div>

        </div>





</>
    );
}