import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import './styles.css';

export default function TeacherList() {
   const [subject, setSubject] = useState('');
   const [week_day, setWeekDay] = useState('');
   const [time, setTime] = useState('');
   const [teachers, setTeachers] = useState([]);

   async function searchTeachers(e:FormEvent) {
      e.preventDefault();

      const response = await api.get('/classes', {
         params: {
            subject,
            week_day,
            time
         }
      });

      setTeachers(response.data);
     
   }

   return(
      <div id="page-teacher-list" className="container">
         <PageHeader title="Estes são os proffys disponíveis.">
            <form id="search-teachers" onSubmit={searchTeachers}>

               <Select 
                  name="subject" 
                  label="Matéria" 
                  options={[
                     { value: 'Artes', label: 'Artes'},
                     { value: 'Biologia', label: 'Biologia'},
                     { value: 'Ciências', label: 'Ciências'},
                     { value: 'Educação Física', label: 'Educação Física'},
                     { value: 'Física', label: 'Física'},
                     { value: 'Geografia', label: 'Geografia'},
                     { value: 'História', label: 'História'},
                     { value: 'Matemática', label: 'Matemática'},
                     { value: 'Português', label: 'Português'},
                     { value: 'Química', label: 'Química'},
                  ]}
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
               />

               <Select 
                  name="week_day" 
                  label="Dia da semana" 
                  options={[
                     { value: '0', label: 'Domingo'},
                     { value: '1', label: 'Segunda-feira'},
                     { value: '2', label: 'Terça-feira'},
                     { value: '3', label: 'Quarta-feira'},
                     { value: '4', label: 'Quinta-feira'},
                     { value: '5', label: 'Sexta-feira'},
                     { value: '6', label: 'Sábado'},
                  ]}
                  value={week_day}
                  onChange={e => setWeekDay(e.target.value)}
               />

               <Input 
                  type="time"
                  name="time"
                  label="Hora"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                />

                <button type="submit">
                   Buscar
                </button>

            </form>
         </PageHeader>

         <main>
            {teachers.map((teacher: Teacher) => <TeacherItem key={teacher.id} teacher={teacher}/>)}
            
         </main>
      </div>
   );
}