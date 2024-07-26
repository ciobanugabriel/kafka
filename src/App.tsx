import React from 'react';
import './App.css';
import Table from './components/Table';
import LightTable from "./components/LightTable";
import Form from './components/Form';

function App() {
  return (
    <div className="bg-gray-300">
      <header>
        <div className="justify-center flex">
          <div className="text-5xl m-2">
            Kafka Demo
          </div>
        </div>
      </header>
      <div className="flex justify-center m-2">
        <Form/>
      </div>
        <div className="flex flex-col md:flex-row justify-center m-2">
            <div className="m-2 md:w-[40%]">
                <Table/>
            </div>

            <div className="m-2 md:w-[30%]">
                <LightTable/>
            </div>

        </div>
    </div>
  );
}

export default App;
