import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function AxiosComponent() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/path').then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}