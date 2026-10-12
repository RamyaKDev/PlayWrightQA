# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dummyticketBooking.spec.ts >> Dummy Ticket Booking application
- Location: tests\dummyticketBooking.spec.ts:52:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Male', { exact: true })
Expected: visible
Error: strict mode violation: getByLabel('Male', { exact: true }) resolved to 5 elements:
    1) <input value="1" name="sex" id="sex_1" type="radio" autocomplete="off" aria-required="true" class="input-radio thwcfe-input-field"/> aka getByRole('radio', { name: 'Male', exact: true })
    2) <input value="1" name="sex2" id="sex2_1" type="radio" autocomplete="off" aria-required="true" class="input-radio thwcfe-input-field thwcfe-disabled-field"/> aka locator('#sex2_1')
    3) <input value="1" name="sex3" id="sex3_1" type="radio" autocomplete="off" aria-required="true" class="input-radio thwcfe-input-field thwcfe-disabled-field"/> aka locator('#sex3_1')
    4) <input value="1" name="sex4" id="sex4_1" type="radio" autocomplete="off" aria-required="true" class="input-radio thwcfe-input-field thwcfe-disabled-field"/> aka locator('#sex4_1')
    5) <input value="1" name="sex5" id="sex5_1" type="radio" autocomplete="off" aria-required="true" class="input-radio thwcfe-input-field thwcfe-disabled-field"/> aka locator('#sex5_1')

Call log:
  - Expect "toBeVisible" getByLabel('Male', { exact: true }) with timeout 5000ms
  - waiting for getByLabel('Male', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=f18e1]:
  - generic [ref=f18e2]:
    - banner [ref=f18e3]:
      - generic [ref=f18e11]:
        - generic [ref=f18e16]:
          - 'link " US: +1 308-888-6496" [ref=f18e17] [cursor=pointer]':
            - /url: tel:+13088886496
            - generic [ref=f18e18]: 
            - text: "US: +1 308-888-6496"
          - 'link " India : +91 888-4-777-300" [ref=f18e19] [cursor=pointer]':
            - /url: tel:+918884777300
            - generic [ref=f18e20]: 
            - text: "India : +91 888-4-777-300"
          - link " UK :+44 744 538 1114" [ref=f18e21] [cursor=pointer]:
            - /url: tel:+447445381114
            - generic [ref=f18e22]: 
            - text: UK :+44 744 538 1114
          - link " U.A.E :+971 54-776-1925" [ref=f18e23] [cursor=pointer]:
            - /url: tel:+971547761925
            - generic [ref=f18e24]: 
            - text: U.A.E :+971 54-776-1925
        - list [ref=f18e30]:
          - listitem [ref=f18e31]: "Follow Us:"
          - listitem [ref=f18e32]:
            - link "" [ref=f18e33] [cursor=pointer]:
              - /url: https://www.facebook.com/dummyticket
          - listitem [ref=f18e35]:
            - link "" [ref=f18e36] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCgzTyJa8V6Lqfo6A2Jvg_MQ
          - listitem [ref=f18e38]:
            - link "" [ref=f18e39] [cursor=pointer]:
              - /url: https://www.instagram.com/dummyticket/
          - listitem [ref=f18e41]:
            - link "" [ref=f18e42] [cursor=pointer]:
              - /url: https://www.tiktok.com/@dummytickets
      - navigation [ref=f18e44]:
        - generic [ref=f18e45]:
          - generic:
            - text: 
            - link [ref=f18e47] [cursor=pointer]:
              - /url: https://www.dummyticket.com/
              - img "Dummy ticket" [ref=f18e48]
          - list [ref=f18e50]:
            - listitem [ref=f18e51]:
              - link "Home" [ref=f18e52] [cursor=pointer]:
                - /url: https://www.dummyticket.com/
            - listitem [ref=f18e53]:
              - link "Buy Ticket" [ref=f18e54] [cursor=pointer]:
                - /url: https://www.dummyticket.com/dummy-ticket-for-visa-application/
            - listitem [ref=f18e55]:
              - link "Contact" [ref=f18e56] [cursor=pointer]:
                - /url: https://www.dummyticket.com/contact/
    - generic [ref=f18e57]:
      - generic [ref=f18e58]:
        - generic [ref=f18e65]:
          - heading [level=2] [ref=f18e66]:
            - paragraph [ref=f18e67]
            - paragraph [ref=f18e68]: Dummy ticket booking
          - paragraph [ref=f18e69]: Please complete the below form and follow instructions in order to make your Dummy ticket
        - generic [ref=f18e73]:
          - heading [level=4] [ref=f18e74]:
            - paragraph [ref=f18e75]
          - heading "Choose the correct option:" [level=4] [ref=f18e76]
          - paragraph
          - generic [ref=f18e77]:
            - alert [ref=f18e79]:  "Dummy ticket for Visa Application" added to your order. Complete your order below.
            - list [ref=f18e81]:
              - listitem [ref=f18e82]:
                - radio [checked] [ref=f18e84]
                - text: Dummy ticket for Visa Application —
                - generic [ref=f18e85]: USD $19
              - listitem [ref=f18e88]:
                - radio [ref=f18e90]
                - text: Dummy return ticket —
                - generic [ref=f18e91]: USD $15
              - listitem [ref=f18e94]:
                - radio [ref=f18e96]
                - text: Dummy hotel booking —
                - generic [ref=f18e97]: USD $20
              - listitem [ref=f18e100]:
                - radio [ref=f18e102]
                - text: Dummy ticket and hotel —
                - generic [ref=f18e103]: USD $35
              - listitem [ref=f18e106]:
                - radio [ref=f18e108]
                - text: Past dated ticket —
                - generic [ref=f18e109]: USD $35
            - status [ref=f18e113]:
              - text: Have a coupon?
              - button "Enter your coupon code" [ref=f18e114] [cursor=pointer]: Click here to enter your code
            - form "Checkout" [ref=f18e115]:
              - generic [ref=f18e117]:
                - generic [ref=f18e119]:
                  - heading "Passenger details:" [level=3] [ref=f18e120]
                  - paragraph [ref=f18e121]:
                    - generic [ref=f18e122]: First / Given name *
                    - textbox "First / Given name" [ref=f18e124]:
                      - /placeholder: first and middle name as on passport
                      - text: Adhithi
                  - paragraph [ref=f18e125]:
                    - generic [ref=f18e126]: Last / Surname *
                    - textbox "Last / Surname" [ref=f18e128]:
                      - /placeholder: last name as on passport
                      - text: Saravanan
                  - paragraph [ref=f18e129]:
                    - generic [ref=f18e130]: Date of birth *
                    - textbox "Date of birth" [ref=f18e132]:
                      - /placeholder: ""
                      - text: 25/07/2017
                  - paragraph [ref=f18e133]:
                    - generic [ref=f18e134]: Sex *
                    - generic [ref=f18e135]:
                      - radio "Male" [ref=f18e136]
                      - text: Male
                      - radio "Female" [ref=f18e137]
                      - text: Female
                  - paragraph [ref=f18e138]:
                    - generic [ref=f18e140]:
                      - 'checkbox "Add more passengers: (optional)" [ref=f18e141]'
                      - text: "Add more passengers: (optional)"
                  - heading "Travel Details" [level=2] [ref=f18e142]
                  - paragraph [ref=f18e143]:
                    - generic [ref=f18e144]: Trip type *
                    - generic [ref=f18e145]:
                      - radio "One Way" [checked] [ref=f18e146]
                      - text: One Way
                      - radio "Round trip" [ref=f18e147]
                      - text: Round trip
                  - paragraph [ref=f18e148]:
                    - generic [ref=f18e149]: From city / Origin *
                    - textbox "From city / Origin" [ref=f18e151]:
                      - /placeholder: ""
                  - paragraph [ref=f18e152]:
                    - generic [ref=f18e153]: To city. /Dest. *
                    - textbox "To city. /Dest." [ref=f18e155]:
                      - /placeholder: ""
                  - paragraph [ref=f18e156]:
                    - generic [ref=f18e157]: Departure date *
                    - textbox "Departure date" [ref=f18e159]:
                      - /placeholder: ""
                  - paragraph [ref=f18e160]:
                    - generic [ref=f18e161]: Additional information (optional)
                    - textbox "Additional information (optional)" [ref=f18e163]:
                      - /placeholder: Enter any additional information that you like us to keep in mind.
                  - heading "Delivery options:" [level=2] [ref=f18e164]
                  - paragraph [ref=f18e165]:
                    - generic [ref=f18e166]: Purpose of dummy ticket (optional)
                    - generic [ref=f18e167]:
                      - combobox [aria-hidden] [ref=f18e168] [cursor=pointer]
                      - combobox [ref=f18e171] [cursor=pointer]:
                        - textbox "Visa application" [ref=f18e172]:
                          - generic [ref=f18e173]: ×
                  - paragraph [ref=f18e174]:
                    - generic [ref=f18e175]: Appointment / Submission date (optional)
                    - textbox "Appointment / Submission date (optional)" [ref=f18e177]:
                      - /placeholder: ""
                  - paragraph [ref=f18e178]:
                    - generic [ref=f18e179]: How will you like to receive the dummy ticket (optional)
                    - generic [ref=f18e180]:
                      - radio "Email" [ref=f18e181]
                      - text: Email
                      - radio "WhatsApp" [ref=f18e182]
                      - text: WhatsApp
                      - radio "Both" [ref=f18e183]
                      - text: Both
                  - generic [ref=f18e184]:
                    - heading "Billing Details" [level=2] [ref=f18e186]
                    - paragraph [ref=f18e187]:
                      - generic [ref=f18e188]: Billing Name / Company (optional)
                      - textbox "Billing Name / Company (optional)" [ref=f18e190]:
                        - /placeholder: ""
                    - paragraph [ref=f18e191]:
                      - generic [ref=f18e192]: Email address *
                      - textbox "Email address" [ref=f18e194]:
                        - /placeholder: ""
                    - paragraph [ref=f18e195]:
                      - generic [ref=f18e196]: Country/Region *
                      - generic [ref=f18e197]:
                        - combobox [aria-hidden] [ref=f18e198] [cursor=pointer]
                        - combobox "Country" [ref=f18e201] [cursor=pointer]:
                          - textbox "United States (US)" [ref=f18e202]
                    - paragraph [ref=f18e203]:
                      - generic [ref=f18e204]: Street address *
                      - textbox "Street address" [ref=f18e206]:
                        - /placeholder: House number and street name
                    - paragraph [ref=f18e207]:
                      - generic [ref=f18e208]: Flat, suite, unit, etc. (optional)
                      - textbox "Flat, suite, unit, etc. (optional)" [ref=f18e210]:
                        - /placeholder: Apartment, suite, unit, etc. (optional)
                    - paragraph [ref=f18e211]:
                      - generic [ref=f18e212]: Town / City *
                      - textbox "Town / City" [ref=f18e214]:
                        - /placeholder: ""
                    - paragraph [ref=f18e215]:
                      - generic [ref=f18e216]: State *
                      - generic [ref=f18e217]:
                        - combobox [aria-hidden] [ref=f18e218] [cursor=pointer]
                        - combobox "State / District / Province" [ref=f18e221] [cursor=pointer]:
                          - textbox [ref=f18e222]
                    - paragraph [ref=f18e223]:
                      - generic [ref=f18e224]: Postcode *
                      - textbox "Postcode" [ref=f18e226]:
                        - /placeholder: ""
                    - paragraph [ref=f18e227]:
                      - generic [ref=f18e228]: Phone *
                      - textbox "Phone" [ref=f18e230]:
                        - /placeholder: ""
                - generic [ref=f18e232]:
                  - heading "Additional information" [level=3] [ref=f18e233]
                  - paragraph [ref=f18e235]:
                    - generic [ref=f18e236]: Order Notes (optional)
                    - textbox "Order Notes (optional)" [ref=f18e238]:
                      - /placeholder: Notes about your order, e.g. special notes for delivery.
              - heading "Your order" [level=3] [ref=f18e239]
              - generic [ref=f18e240]:
                - table [ref=f18e242]:
                  - rowgroup [ref=f18e243]:
                    - row [ref=f18e244]:
                      - columnheader "Product Quantity" [ref=f18e245]:
                        - text: Product
                        - generic [ref=f18e246]: Quantity
                      - columnheader "Total" [ref=f18e247]
                  - rowgroup [ref=f18e248]:
                    - row [ref=f18e249]:
                      - cell "× Dummy ticket for Visa Application 1" [ref=f18e250]:
                        - link "×" [ref=f18e252] [cursor=pointer]:
                          - /url: https://www.dummyticket.com/dummy-ticket-order-page/?remove_item=ccb1d45fb76f7c5a0bf619f979c6cf36&_wpnonce=f799d4089a
                        - generic [ref=f18e253]: Dummy ticket for Visa Application
                        - generic [ref=f18e254]: "1"
                      - cell "USD $19" [ref=f18e255]
                  - rowgroup [ref=f18e258]:
                    - row [ref=f18e259]:
                      - rowheader "Cart Subtotal" [ref=f18e260]
                      - cell "USD $19" [ref=f18e261]
                    - row [ref=f18e264]:
                      - rowheader "Order Total" [ref=f18e265]
                      - cell "USD $19" [ref=f18e266]:
                        - strong [ref=f18e267]:
                          - generic [ref=f18e268]: USD $19
                - generic [ref=f18e270]:
                  - list "Payment methods" [ref=f18e271]:
                    - listitem [ref=f18e272]:
                      - radio "Payment options" [checked] [ref=f18e273]
                      - generic [ref=f18e274]: Payment options
                      - group [ref=f18e276]:
                        - iframe [ref=f18e279]:
                          - generic [ref=f24e9]:
                            - generic [ref=f24e10]: Card
                            - generic [ref=f24e21]:
                              - generic [ref=f24e24]:
                                - generic [ref=f24e26]:
                                  - generic [aria-hidden] [ref=f24e27]: Card number
                                  - generic [ref=f24e29]:
                                    - textbox "Card number" [ref=f24e31]:
                                      - /placeholder: 1234 1234 1234 1234
                                    - generic:
                                      - generic:
                                        - list "Supported cards include Visa and Mastercard.":
                                          - listitem: Visa
                                          - listitem: Mastercard
                                        - generic [aria-hidden]:
                                          - paragraph [aria-hidden]: Supported cards include Visa and Mastercard.
                                - generic [ref=f24e34]:
                                  - generic [aria-hidden] [ref=f24e35]: Expiry date
                                  - textbox "Expiry date" [ref=f24e39]:
                                    - /placeholder: MM / YY
                                - generic [ref=f24e42]:
                                  - generic [aria-hidden] [ref=f24e43]: Security code
                                  - generic [ref=f24e45]:
                                    - textbox "Security code" [ref=f24e47]:
                                      - /placeholder: CVC
                                    - generic:
                                      - generic [aria-hidden]: 3-digit code on back of card
                              - generic [aria-hidden]: 0123456789０１２３４５６７８９
                              - button [aria-hidden]
                        - alert
                        - textbox [aria-hidden]
                    - listitem [ref=f18e280]:
                      - radio "PayPal PayPal acceptance mark" [ref=f18e281]
                      - generic [ref=f18e282]:
                        - text: PayPal
                        - img "PayPal acceptance mark" [ref=f18e283]
                  - button "Place order" [ref=f18e285] [cursor=pointer]
          - paragraph
      - generic [ref=f18e290]:
        - generic [ref=f18e293]:
          - link "Home" [ref=f18e294] [cursor=pointer]:
            - /url: https://www.dummyticket.com/
          - link "About" [ref=f18e295] [cursor=pointer]:
            - /url: https://www.dummyticket.com/about
          - link "Buy Ticket" [ref=f18e296] [cursor=pointer]:
            - /url: https://www.dummyticket.com/dummy-ticket-for-visa-application/
          - link "Travel agents" [ref=f18e297] [cursor=pointer]:
            - /url: https://www.dummyticket.com/travel-agent-registration-form/
          - link "Affiliate Program" [ref=f18e298] [cursor=pointer]:
            - /url: http://affiliate.dummyticket.com/
          - link "FAQ" [ref=f18e299] [cursor=pointer]:
            - /url: https://www.dummyticket.com/faq
          - link "Contact" [ref=f18e300] [cursor=pointer]:
            - /url: https://www.dummyticket.com/contact
        - list [ref=f18e303]:
          - listitem [ref=f18e304]:
            - link " " [ref=f18e305] [cursor=pointer]:
              - /url: https://www.facebook.com/dummyticket/
              - generic [ref=f18e306]: 
              - generic [ref=f18e307]: 
          - listitem [ref=f18e308]:
            - link " " [ref=f18e309] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCgzTyJa8V6Lqfo6A2Jvg_MQ
              - generic [ref=f18e310]: 
              - generic [ref=f18e311]: 
          - listitem [ref=f18e312]:
            - link " " [ref=f18e313] [cursor=pointer]:
              - /url: https://www.instagram.com/dummyticket/
              - generic [ref=f18e314]: 
              - generic [ref=f18e315]: 
        - paragraph [ref=f18e317]:
          - text: © Copyright 2026
          - link "Premier International Travel Services" [ref=f18e318] [cursor=pointer]:
            - /url: http://dummyticket.com
          - text: © All Rights Reserved. Website designed and developed by
          - link "Ktini Web Services" [ref=f18e319] [cursor=pointer]:
            - /url: https://ktini.com/
  - link "" [ref=f18e320] [cursor=pointer]:
    - /url: javascript:void(0);
  - generic [ref=f18e322]:
    - link "USD United States (US) dollar" [ref=f18e324]:
      - /url: /dummy-ticket-for-visa-application/?wmc-currency=USD
      - generic [ref=f18e325]: USD
      - generic [ref=f18e326]: United States (US) dollar
    - link "EUR Euro" [ref=f18e328] [cursor=pointer]:
      - /url: /dummy-ticket-for-visa-application/?wmc-currency=EUR
      - generic [ref=f18e329]: EUR
      - generic [ref=f18e330]: Euro
    - link "INR Indian rupee" [ref=f18e332] [cursor=pointer]:
      - /url: /dummy-ticket-for-visa-application/?wmc-currency=INR
      - generic [ref=f18e333]: INR
      - generic [ref=f18e334]: Indian rupee
    - link "GBP Pound sterling" [ref=f18e336] [cursor=pointer]:
      - /url: /dummy-ticket-for-visa-application/?wmc-currency=GBP
      - generic [ref=f18e337]: GBP
      - generic [ref=f18e338]: Pound sterling
    - link "CAD Canadian dollar" [ref=f18e340] [cursor=pointer]:
      - /url: /dummy-ticket-for-visa-application/?wmc-currency=CAD
      - generic [ref=f18e341]: CAD
      - generic [ref=f18e342]: Canadian dollar
    - link "AUD Australian dollar" [ref=f18e344] [cursor=pointer]:
      - /url: /dummy-ticket-for-visa-application/?wmc-currency=AUD
      - generic [ref=f18e345]: AUD
      - generic [ref=f18e346]: Australian dollar
    - link "PHP Philippine peso" [ref=f18e348] [cursor=pointer]:
      - /url: /dummy-ticket-for-visa-application/?wmc-currency=PHP
      - generic [ref=f18e349]: PHP
      - generic [ref=f18e350]: Philippine peso
    - link "AED United Arab Emirates dirham" [ref=f18e352] [cursor=pointer]:
      - /url: /dummy-ticket-for-visa-application/?wmc-currency=AED
      - generic [ref=f18e353]: AED
      - generic [ref=f18e354]: United Arab Emirates dirham
    - text: +
  - generic [ref=f18e355]:
    - generic [ref=f18e356]:
      - generic "Prev" [ref=f18e357]
      - generic "Next" [ref=f18e359]
      - generic [ref=f18e361]:
        - combobox "Select month" [ref=f18e362]:
          - option "Jan"
          - option "Feb"
          - option "Mar"
          - option "Apr"
          - option "May"
          - option "Jun"
          - option "Jul" [selected]
          - option "Aug"
          - option "Sep"
          - option "Oct"
          - option "Nov"
          - option "Dec"
        - combobox "Select year" [ref=f18e363]:
          - option "1926"
          - option "1927"
          - option "1928"
          - option "1929"
          - option "1930"
          - option "1931"
          - option "1932"
          - option "1933"
          - option "1934"
          - option "1935"
          - option "1936"
          - option "1937"
          - option "1938"
          - option "1939"
          - option "1940"
          - option "1941"
          - option "1942"
          - option "1943"
          - option "1944"
          - option "1945"
          - option "1946"
          - option "1947"
          - option "1948"
          - option "1949"
          - option "1950"
          - option "1951"
          - option "1952"
          - option "1953"
          - option "1954"
          - option "1955"
          - option "1956"
          - option "1957"
          - option "1958"
          - option "1959"
          - option "1960"
          - option "1961"
          - option "1962"
          - option "1963"
          - option "1964"
          - option "1965"
          - option "1966"
          - option "1967"
          - option "1968"
          - option "1969"
          - option "1970"
          - option "1971"
          - option "1972"
          - option "1973"
          - option "1974"
          - option "1975"
          - option "1976"
          - option "1977"
          - option "1978"
          - option "1979"
          - option "1980"
          - option "1981"
          - option "1982"
          - option "1983"
          - option "1984"
          - option "1985"
          - option "1986"
          - option "1987"
          - option "1988"
          - option "1989"
          - option "1990"
          - option "1991"
          - option "1992"
          - option "1993"
          - option "1994"
          - option "1995"
          - option "1996"
          - option "1997"
          - option "1998"
          - option "1999"
          - option "2000"
          - option "2001"
          - option "2002"
          - option "2003"
          - option "2004"
          - option "2005"
          - option "2006"
          - option "2007"
          - option "2008"
          - option "2009"
          - option "2010"
          - option "2011"
          - option "2012"
          - option "2013"
          - option "2014"
          - option "2015"
          - option "2016"
          - option "2017" [selected]
          - option "2018"
          - option "2019"
          - option "2020"
          - option "2021"
          - option "2022"
          - option "2023"
          - option "2024"
          - option "2025"
          - option "2026"
    - table [ref=f18e364]:
      - rowgroup [ref=f18e365]:
        - row [ref=f18e366]:
          - columnheader "Su" [ref=f18e367]
          - columnheader "Mo" [ref=f18e368]
          - columnheader "Tu" [ref=f18e369]
          - columnheader "We" [ref=f18e370]
          - columnheader "Th" [ref=f18e371]
          - columnheader "Fr" [ref=f18e372]
          - columnheader "Sa" [ref=f18e373]
      - rowgroup [ref=f18e374]:
        - row [ref=f18e375]:
          - cell
          - cell
          - cell
          - cell
          - cell
          - cell
          - cell [ref=f18e376]:
            - link "1" [ref=f18e377] [cursor=pointer]:
              - /url: "#"
        - row [ref=f18e378]:
          - cell [ref=f18e379]:
            - link "2" [ref=f18e380] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e381]:
            - link "3" [ref=f18e382] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e383]:
            - link "4" [ref=f18e384] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e385]:
            - link "5" [ref=f18e386] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e387]:
            - link "6" [ref=f18e388] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e389]:
            - link "7" [ref=f18e390] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e391]:
            - link "8" [ref=f18e392] [cursor=pointer]:
              - /url: "#"
        - row [ref=f18e393]:
          - cell [ref=f18e394]:
            - link "9" [ref=f18e395] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e396]:
            - link "10" [ref=f18e397] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e398]:
            - link "11" [ref=f18e399] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e400]:
            - link "12" [ref=f18e401] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e402]:
            - link "13" [ref=f18e403] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e404]:
            - link "14" [ref=f18e405] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e406]:
            - link "15" [ref=f18e407] [cursor=pointer]:
              - /url: "#"
        - row [ref=f18e408]:
          - cell [ref=f18e409]:
            - link "16" [ref=f18e410] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e411]:
            - link "17" [ref=f18e412] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e413]:
            - link "18" [ref=f18e414] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e415]:
            - link "19" [ref=f18e416] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e417]:
            - link "20" [ref=f18e418] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e419]:
            - link "21" [ref=f18e420] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e421]:
            - link "22" [ref=f18e422] [cursor=pointer]:
              - /url: "#"
        - row [ref=f18e423]:
          - cell [ref=f18e424]:
            - link "23" [ref=f18e425] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e426]:
            - link "24" [ref=f18e427] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e428]:
            - link "25" [active] [ref=f18e429] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e430]:
            - link "26" [ref=f18e431] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e432]:
            - link "27" [ref=f18e433] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e434]:
            - link "28" [ref=f18e435] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e436]:
            - link "29" [ref=f18e437] [cursor=pointer]:
              - /url: "#"
        - row [ref=f18e438]:
          - cell [ref=f18e439]:
            - link "30" [ref=f18e440] [cursor=pointer]:
              - /url: "#"
          - cell [ref=f18e441]:
            - link "31" [ref=f18e442] [cursor=pointer]:
              - /url: "#"
          - cell
          - cell
          - cell
          - cell
          - cell
    - generic [ref=f18e443]:
      - button "Today" [ref=f18e444] [cursor=pointer]
      - button "Done" [ref=f18e445] [cursor=pointer]
```

# Test source

```ts
  1  | import {expect,test,Page,Locator} from "@playwright/test"
  2  | 
  3  | 
  4  | async function selectDate(page:Page,dateInputSelector:Locator,targetDate:string){
  5  | /*
  6  | Create a generic reusable function that:
  7  | •Opens the date picker
  8  | •Selects Year
  9  | •Selects Month
  10 |  Selects Day
  11 | •Works for any date field
  12 | */
  13 | 
  14 | 
  15 | 
  16 | 
  17 | }
  18 | async function selectDateOfBirth(page:Page){
  19 |     const dob=page.locator('#dob')
  20 | await dob.click()
  21 | const month=page.locator('select.ui-datepicker-month')
  22 | //await expect(month).toBeVisible()
  23 | //const month= page.getByText('Jan', { exact: true })
  24 |         const year=page.locator('select.ui-datepicker-year')
  25 |         const day=await page.locator('table.ui-datepicker-calendar td a').all()
  26 |     let dat='25'
  27 |        await month.selectOption('6')
  28 |        await year.selectOption('2017')
  29 |       // await page.locator('table.ui-datepicker-calendar a', { hasText: dat }).first().click(); 
  30 |         
  31 |         for(let r of day){
  32 |            let d=await r.innerText()
  33 |            if(d===dat){
  34 |               await r.click()
  35 |               break
  36 |            }
  37 |         }
  38 |        
  39 | }
  40 | 
  41 | async function selectTravelDate(page:Page,dateInputSelector:string,travelDate:string){
  42 | /*
  43 | Create a specialized wrapper function for selecting:
  44 | •Departure Date
  45 | •Return Date
  46 | */
  47 | }
  48 | 
  49 | 
  50 | 
  51 | 
  52 | test("Dummy Ticket Booking application",async({page})=>{
  53 | 
  54 |     //step:1
  55 |  await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
  56 |  await expect(page).toHaveURL("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
  57 |  const title=page.getByText('Dummy ticket booking')
  58 |  await expect(title).toBeVisible()
  59 | const placeOrder=page.getByRole('button',{name:"Place order"})
  60 | await expect(placeOrder).toBeVisible()
  61 | 
  62 | //step:2
  63 | const L1=page.locator('input#product_549')
  64 | const L2=page.locator('input#product_550')
  65 | const L3=page.locator('input#product_551')
  66 | const L4=page.locator('input#product_3186')
  67 | const L5=page.locator('input#product_7441')
  68 | await expect(L1).toBeVisible()
  69 | await expect(L2).toBeVisible()
  70 | await expect(L3).toBeVisible()
  71 | await expect(L4).toBeVisible()
  72 | await expect(L5).toBeVisible()
  73 | 
  74 | await L1.check()
  75 | await expect(L1).toBeChecked()
  76 | await expect(L2).not.toBeChecked()
  77 | await expect(L3).not.toBeChecked()
  78 | await expect(L4).not.toBeChecked()
  79 | await expect(L5).not.toBeChecked()
  80 | 
  81 | 
  82 | //Step 3: Enter Passenger Details
  83 | const firstName=page.locator('input#travname')
  84 | await firstName.fill("Adhithi")
  85 | const lastName=page.locator('input#travlastname')
  86 | await lastName.fill("Saravanan")
  87 | await selectDateOfBirth(page)
  88 | const dob=page.locator('#dob')
  89 | //await dob.click()
  90 |  await expect(dob).toHaveValue('25/07/2017')
  91 | 
  92 | const Male=page.getByLabel("Male",{exact:true})
  93 |         const Female=page.getByLabel("Female",{exact:true})
> 94 |         await expect(Male).toBeVisible()
     |                            ^ Error: expect(locator).toBeVisible() failed
  95 |         await expect(Female).toBeVisible()
  96 |         await Female.check()
  97 |         await expect(Female).toBeChecked()
  98 |         await expect(Male).not.toBeChecked()
  99 | })
```