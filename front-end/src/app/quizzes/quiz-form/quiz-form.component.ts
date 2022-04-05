import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)

  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  public quizForm: FormGroup;
  public idUser:string

  constructor(public router:Router , public formBuilder: FormBuilder, public quizService: QuizService, private route:ActivatedRoute) {
    this.quizForm = this.formBuilder.group({
      name: [''],
      theme: [''],
      image:['']
    });
  }

  ngOnInit() {
    this.idUser = this.route.snapshot.paramMap.get('idUser');
  }


  addQuiz() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;

    this.quizService.addQuiz(quizToCreate);
    this.router.navigate(['/quiz-list/'+this.idUser]);
  }

}
