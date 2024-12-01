import { Routes } from '@angular/router';
import { BooksComponent } from './assignment11/books/books.component';
import { TechnologiesComponent } from './assignment11/technologies/technologies.component';
import { InvalidComponent } from './assignment11/invalid/invalid.component';

export const routes: Routes = 
[
	{
        path : '',
        component : TechnologiesComponent
    },
{
        path : 'technologies',
        component : TechnologiesComponent
    },
    
    {
        path : 'books',
        component : BooksComponent
    },
    {
        path : '**',
        component :InvalidComponent
    }
];
