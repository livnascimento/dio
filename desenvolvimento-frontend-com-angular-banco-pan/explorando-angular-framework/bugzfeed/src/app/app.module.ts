import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardQuestionComponent } from './components/card-question/card-question.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardAdComponent } from './components/card-ad/card-ad.component';
import { CardResultComponent } from './components/card-result/card-result.component';
import { QuizService, SharedStateService } from './components/quiz/quiz.service';
import { SeeMoreSectionComponent } from './components/see-more-section/see-more-section.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    HeaderComponent,
    CardQuestionComponent,
    CardInfoComponent,
    CardAdComponent,
    CardResultComponent,
    SeeMoreSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [QuizService, SharedStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
