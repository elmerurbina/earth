document.addEventListener('DOMContentLoaded', function() {
    // Get references to all menu links
    const menuLinks = document.querySelectorAll('nav ul li a');

    // Add click event listeners to all menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the target section ID from the href attribute of the clicked link
            const targetSectionId = link.getAttribute('href').substring(1);

            // Scroll to the target section smoothly if it exists
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Display information for specific sections
            if (targetSectionId === 'sustainability-section') {
                displaySustainabilityInformation();
            } else if (targetSectionId === 'global-warming-section') {
                displayGlobalWarmingInformation();
            }
        });
    });

    // Function to display information about sustainable practices
    function displaySustainabilityInformation() {
        const sustainabilitySection = document.getElementById('sustainability-section');
        if (sustainabilitySection) {
            sustainabilitySection.innerHTML = `
                <h2>Sustainable Practices for Mitigating Climate Change</h2>
                <p>1. Reduce, reuse, and recycle to minimize waste generation.</p>
                <p>2. Conserve energy by using energy-efficient appliances and renewable energy sources.</p>
                <p>3. Support sustainable agriculture and food production methods.</p>
                <p>4. Opt for eco-friendly transportation options such as walking, cycling, or using public transit.</p>
                <p>5. Plant trees and participate in reforestation efforts to absorb carbon dioxide from the atmosphere.</p>
            `;
        }
    }

    // Function to display information about global warming
    function displayGlobalWarmingInformation() {
        const globalWarmingSection = document.getElementById('global-warming-section');
        if (globalWarmingSection) {
            globalWarmingSection.innerHTML = `
                <h2>What is Global Warming?</h2>
                <p>Global warming refers to the long-term increase in Earth's average surface temperature due to human activities, such as burning fossil fuels, deforestation, and industrial processes. These activities release greenhouse gases, such as carbon dioxide and methane, into the atmosphere, which trap heat and cause the planet to warm.</p>
                <p>For more information about temperature growth, refer to <a href="#">Chart 1.1.</a></p>
            `;
        }
    }
});
