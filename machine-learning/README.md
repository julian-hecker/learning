- [Parent Directory](../)
# Machine Learning A-Z
Machine Learning is a branch of Artificial Intelligence.

Often used to categorize data, or calculate multidimensional regression; the set of calculations that turns the input into the output.

Notes pertain to Python language.


## 00 Introduction
Machine Learning algorithms consist of Architecture and Weights
- Architecture consists of input layer, hidden layers, and output layer, each with many neurons
    - Architectures with more hidden layers perform more complex calculations.
- Weights determine how the inputs in the previous layer are handled. These get adjusted over the course of training.


## 01 Data Preprocessing
Before putting data into a ML algorithm, data must be preprocessed to fit inside the algorithm.
- Importing Libraries
    - There are several libraries used for preprocessing.
    - Numpy, for math on large datasets
    - Pandas, for data frames
    - Matplotlib, for data visualization
    - sklearn, for machine learning preprocessing
        - .impute's SimpleImputer
        - .preprocessing's LabelEncoder, OneHotEncoder, StandardScaler
        - .model_selection's train_test_split
- Getting Dataset
    - Can be CSV, or other data format
    - Several websites offer datasets (https://http://archive.ics.uci.edu/ml/)
    - Hardest part of Machine Learning
- Impute Missing Data
    - Instead of removing missing data, imputing fills it in with the mean, median, or mode of the data.
- Encoding Categorical Data
    - Categorical Data is not numerical, so has to be encoded in numerical form.
    - Categories that cannot be compared like size or value can, must be put through a OneHotEncoder
        - Letters of the alphabet are represented with 26 numbers, with one bit representing true.
- Split Training and Data sets
    - Data that is to be tested must be passed through the same preprocessing as the training set, so they are split up
- Feature Scaling / Normalization
    - Data must be normalized before putting through machine learning algorithm, so all dimensions are on the same scale.


## 02 Regression





