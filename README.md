# UFOs

## Objective
I created an interactive webpage to display research data based on UFO sightings in the USA.  The webpage allows users to filter the data.  

For this project, ECMAScript (ES6) was used.  ES6 is an update to JavaScript that provides standardization.   

Additionally, the JavaScript library, D3, was used to interact with the HTML that will create the webpage.

### Tasks

    - Use JavaScript to create a dynamic table of the data.
    - Use JavaScript to add a filter to manipulate the data by date, city, state, country, and shape.
    - Use HTML to create a webpage that allows users to view the data.
    - Use Bootstrap to design and make the page responsive.
    - Use CSS to design the page.
    - Analyze how I can make the webpage better for users.

## Resources

### Tools/Languages/Libraries:
    - JavaScript(ES6)
    - HTML5
    - Bootstrap 3
    - D3 4.11.0
    - CSS3

### File:
    - data.js


## Results

### Webpage
![sample_of_page](https://user-images.githubusercontent.com/33010018/156904598-1381e73e-4c42-49d3-9984-4a97dc9fbc85.png)

### Filtered Table
![filtered_table](https://user-images.githubusercontent.com/33010018/156904605-15f039ee-28a3-4832-a994-70d52e917775.png)

### Using the Webpage
- Enter 1 or more search criteria under 'Filter Search' and click out of the search box.
    - Example Searching the State of MO
    
    ![search_criteria](https://user-images.githubusercontent.com/33010018/156904619-30a6a30c-83cf-4e92-a1ab-878c9c10be29.png)
- See filtered table showing only MO above.
- Delete your search criteria and click out of the search box to get back to the original table.


## Summary
### Drawbacks of This Webpage
- There is not a submit button or instructions to show users how the filter works.  If a user enters text without clicking out of the search box, the table doesn't filter.  
- The table only filters once you click out of the search box after entering text.


### Additional Recommendations for Further Development
- Add a submit button at the bottom so that users who aren't tech savvy can filter the table.
- Remove the 'Enter a Country' search option.  US is the only country listed on the table so there is no reason to have that option on the webpage.  This could lead users to believe the table contains research outside of the US.
