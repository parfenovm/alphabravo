'use client'

import { useEffect, useState } from "react";

const PHONETIC_WORDS: { [key: string]: string } = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu",
    'Æ': "Ærlig",
    "Ø": "Østen",
    "Å": "Åse"
};

interface PhoneticSpelling {
    word: string;
    spelling: string;
}

const formatText = (text: string): PhoneticSpelling[] => {
    const words = text.split(' ');
    return words.map((word) => ({
        word,
        spelling: [...word].map((letter) => PHONETIC_WORDS[letter.toUpperCase()]).join(' ')
    }));
}

export default function Home() {
    const [text, setText] = useState('');
    const [phoneticText, setPhoneticText] = useState<PhoneticSpelling[]>([]);

    const updateText = (text: string) => {
        setText(text);

        if (!text.length && phoneticText.length) {
            setPhoneticText([])
            return;
        }
        if (!text.length) {
            return;
        }

        setPhoneticText(formatText(text));
    }

    const clearText = () => {
        setText('');
        setPhoneticText([])
    }

    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center  p-5'>
                <div>
                    <p>Text</p>
                    <input placeholder='text' className='p-4 border-2 border-black rounded text-xl' value={text} onChange={(event) => updateText(event.target.value)}/>
                    <button className='ml-8' onClick={() => clearText()}>Clear</button>
                </div>
                <div className='mt-4 flex flex-col gap-4 items-start'>
                    <label>Output</label>
                    {phoneticText.map((data, index) => <div key={data.word+index} className='flex flex-col gap-4'>
                        <p><b>{data.word}:</b></p>{data.spelling}</div>)}
                </div>
            </div>
        </div>
    )
}
