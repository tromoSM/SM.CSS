![just a logo.](https://github.com/tromoSM/SM.CSS/blob/main/logo.xss.png?raw=true)

#### **SM.CSS** is a javascript runtime that read your custom attributes in your .html and translate them into real CSS styles.

# What **SM.CSS** does 
#### SM.CSS scans your html for attributes like 
- SM="flex-responsive-center"
- SM="flex-center"
- SM="header-main"
  
And applies the appropriate styles dynamically with JavaScript.
**SM.CSS** lets you design without writing raw CSS and without wasting any time.

HTML attributes → **SM.CSS** → real CSS.

# How to use **SM.CSS**
#### you can get the latest version at [here](https://github.com/tromoSM/SM.CSS/blob/main/main.js) (unstable and stable) or [get the latest stable version](https://github.com/tromoSM/SM.CSS/blob/main/main.SMcss)

#### or you can link the js in you html directly as ```<script src="https://tromosm.github.io/SM.CSS/main.js"></script>```(unstable/stable) or use  ```<script src="https://tromosm.github.io/SM.CSS/main.SMcss"></script>```(stable)
# What each attributes and propeties mean

| SID  | Description                                 | Attribute / Value            | Notes / Example |
|-----|---------------------------------------------|-------------------------------|-----------------|
| 00  | Main attribute name                         | `Const => "{{attr}}"`         | `SM=""` |
| 01  | Responsive flex styling centered            | `flex-responsive-center`      |                 |
| 02  | Responsive flex styling                     | `flex-responsive`             |                 |
| 03  | Flex styling centered                       | `flex-center`                 |                 |
| 04  | Flex styling                                | `flex`                        |                 |
| 05  | Flex direction (must come after all `$flex` element names) | `-c` / `--column`<br>`-r` / `--row`<br>`-cr` / `--column reverse`<br>`-rr` / `--row reverse` | Example: `$flex="c"` |
| 06  | Floating header                             | `header-main`                 |                 |
| 07  | Backdrop filter blur value                  | `&backdropval`                | Value must be a number |
| 08  | Authors name                                   setting="user".innerText     | this will be used for the license attribute|
| 09  | License name                                |  license=""                   | ex: license="cc"
 | 10  | Custom license text                         |   cstm=""                     | ex: cstm="license text"|
| 11 | Reserved rights                        |  setting="rights-reserved".innertext  | `<tromoSM-type setting="rights-reserved">all</tromoSM-type>`|

#### contact us - tromoSM.dumbass@gmail.com
#### current version : 1.03
#### current stable version : 1.02
#### info : don't use the unstable version if you're not a developer.
