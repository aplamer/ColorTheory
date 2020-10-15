import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ColorWheelComponent } from './color-tester/color-wheel/color-wheel.component';
import { CombinationComponent } from './color-tester/combination/combination.component';
import { AboutComponent } from './about/about.component';
import { ColorTesterComponent } from './color-tester/color-tester.component';
import { ColorAboutComponent } from './about/color-about/color-about.component';
import { HarmonyComponent } from './about/harmony/harmony.component';
import { SymbolismComponent } from './about/symbolism/symbolism.component';
import { ColorComponent } from './color/color.component';
import { ColorSymbolismComponent } from './color-symbolism/color-symbolism.component';
import iro from '@jaames/iro';
import { GeneralComponent } from './color-symbolism/general/general.component';
import { EasternComponent } from './color-symbolism/eastern/eastern.component';
import { WesternComponent } from './color-symbolism/western/western.component'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './color-symbolism/filter.pipe';
import { MonochromaticComponent } from './color-tester/combination/monochromatic/monochromatic.component';
import { ComplementaryComponent } from './color-tester/combination/complementary/complementary.component';
import { SplitComplementaryComponent } from './color-tester/combination/split-complementary/split-complementary.component';
import { DoubleComplementaryComponent } from './color-tester/combination/double-complementary/double-complementary.component';
import { AnalogousComponent } from './color-tester/combination/analogous/analogous.component';
import { TriadComponent } from './color-tester/combination/triad/triad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorWheelComponent,
    CombinationComponent,
    AboutComponent,
    ColorTesterComponent,
    ColorAboutComponent,
    HarmonyComponent,
    SymbolismComponent,
    ColorComponent,
    ColorSymbolismComponent,
    GeneralComponent,
    EasternComponent,
    WesternComponent,
    FilterPipe,
    MonochromaticComponent,
    ComplementaryComponent,
    SplitComplementaryComponent,
    DoubleComplementaryComponent,
    AnalogousComponent,
    TriadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
