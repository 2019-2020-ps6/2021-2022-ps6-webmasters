import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { PlayQuizComponent } from './play/play-quiz/play-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import  {UserAddComponent} from './users/user-add/user-add.component';
import  {UserEditComponent} from './users/user-edit/user-edit.component';
import { UserHistoryComponent } from './users/user-history/user-history.component';

const routes: Routes = [
    {path: 'quiz-list/:idUser', component: QuizListComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'edit-quiz/:id/:idUser', component: EditQuizComponent},
    { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
    {path: 'quiz-add/:idUser', component : QuizFormComponent},
    {path: 'add-question/:id',component:  QuestionFormComponent },
    {path: 'quiz-play/:idUser/:idQuiz',component: PlayQuizComponent},
    {path:'user-add',component: UserAddComponent},
    {path:'edit-user/:id',component: UserEditComponent},
    {path:'user-history/:id' , component: UserHistoryComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
