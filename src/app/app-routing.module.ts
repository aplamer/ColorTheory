import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ColorTesterComponent} from './color-tester/color-tester.component'
import {AnalogousComponent} from './color-tester/combination/analogous/analogous.component'
import {ComplementaryComponent} from './color-tester/combination/complementary/complementary.component'
import {DoubleComplementaryComponent} from './color-tester/combination/double-complementary/double-complementary.component'
import {MonochromaticComponent} from './color-tester/combination/monochromatic/monochromatic.component'
import {SplitComplementaryComponent} from './color-tester/combination/split-complementary/split-complementary.component'
import {TriadComponent} from './color-tester/combination/triad/triad.component'
import {AboutComponent} from './about/about.component'
import { ColorAboutComponent } from './about/color-about/color-about.component';
import { HarmonyComponent } from './about/harmony/harmony.component';
import { SymbolismComponent } from './about/symbolism/symbolism.component';
import { ColorComponent } from './color/color.component'
import { ColorSymbolismComponent } from './color-symbolism/color-symbolism.component'
import { GeneralComponent } from './color-symbolism/general/general.component';
import { WesternComponent } from './color-symbolism/western/western.component';
import { EasternComponent } from './color-symbolism/eastern/eastern.component';
import { NoneComponent } from './color-tester/combination/none/none.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'color-tester', component: ColorTesterComponent, children: [
    {path: 'analogous', component: AnalogousComponent},
    {path: 'complementary', component: ComplementaryComponent},
    {path: 'doublecomplementary', component: DoubleComplementaryComponent},
    {path: 'monochromatic', component: MonochromaticComponent},
    {path: 'splitcomplementary', component: SplitComplementaryComponent},
    {path: 'triad', component: TriadComponent},
    {path: 'none', component: NoneComponent}
  ]},
  {path: 'color-symbolism', component: ColorSymbolismComponent, children:[
    {path: 'general', component: GeneralComponent},
    {path: 'western', component: WesternComponent},
    {path: 'eastern', component: EasternComponent},
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
