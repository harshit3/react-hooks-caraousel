#Carousel built using react-hooks.

react-hooks-carousel is a react package for carousel built using react-hooks.

##Installation

```bash
npm install react-hooks-carousel
```

## Usage

```javascript
import ReactHooksCarousel from 'react-hooks-carousel';

function Carousel() {
    return (
        <ReactHooksCarousel />
    );
}
```

##Props
| Property            | Description                                      |    Default    |     Accepted Values |
|---------------------|--------------------------------------------------|:-------------:|--------------------:|
| pictures            | Image urls that needs to be rendered in carousel |               | array of image urls |
| height              | Height of carousel                               |     350px     | any value with unit |
| width               | Width of carousel                                |     500px     | any value with unit |
| styleProp           | define styles for images in carousel             |               | react style object  |
| altProp             | alt attribute for images                         | 'Cannot Load' | string              |
| disableAutoPlay     | true if want to stop autoplay initially          | false         | true / false        |

##Example with props
```javascript
import ReactHooksCarousel from 'react-hooks-carousel';

function Carousel() {
    return (
        <ReactHooksCarousel 
            height="150px"
            width="350px"
            styleProp={{ borderRadius: "50px", border: "1px solid" }}
            pictures={[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHdDcqk90c1t8gxqSJowecXCBt1Xx4hxbRbkgSG55snmAsdsFww",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb8wtRT8-N0IcXnOyKIFhS7KXCLP4IEdxis8omLyuErz3kWnkbw",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo6Itcx8wc4IsjusLxnkhAUAoLH8ceqzKwOBnicDJvk5epHcY"
            ]}
        />
    );
}
```