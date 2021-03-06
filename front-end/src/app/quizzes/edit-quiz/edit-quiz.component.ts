import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';
import { Router } from '@angular/router';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  public quiz: Quiz;
  public quizForm: FormGroup;
  quizUrl: string;
  id: string;
  idUser: string
  


  constructor(public router:Router ,private route: ActivatedRoute,public formBuilder: FormBuilder, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) =>{
      this.quiz = quiz

    });
    console.log("after subscribe", this.quiz)


  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(this.id);
    this.idUser = this.route.snapshot.paramMap.get('idUser');
  }
  onSubmit(): void {
    this.quizService.updateQuiz(this.quiz);
    this.router.navigate(['/quiz-list/1/admin']).catch();
    console.log(this.quiz);
  }
}
