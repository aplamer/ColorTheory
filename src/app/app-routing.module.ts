import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ColorTesterComponent} from './color-tester/color-tester.component'
import {CombinationComponent} from './color-tester/combination/combination.component'
import {AboutComponent} from './about/about.component'
import { ColorAboutComponent } from './about/color-about/color-about.component';
import { HarmonyComponent } from './about/harmony/harmony.component';
import { SymbolismComponent } from './about/symbolism/symbolism.component';
import { ColorComponent } from './color/color.component'
import { ColorSymbolismComponent } from './color-symbolism/color-symbolism.component'
import { GeneralComponent } from './color-symbolism/general/general.component';
import { WesternComponent } from './color-symbolism/western/western.component';
import { EasternComponent } from './color-symbolism/eastern/eastern.component';
const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'color-tester', component: ColorTesterComponent, children: [
    {path: 'combination', component: CombinationComponent}
  ]},
  {path: 'color-symbolism', component: ColorSymbolismComponent, children:[
    {path: 'general', component: GeneralComponent},
    {path: 'western', component: WesternComponent},
    {path: 'eastern', component: EasternComponent}
  ]},
  {path: 'color', component: ColorComponent},
  {path: 'about', component:AboutComponent, children: [
    {path:'color', component: ColorAboutComponent},
    {path:'harmony', component: HarmonyComponent},
    {path: 'symbolism', component: SymbolismComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
