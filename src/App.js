import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Modal from './Components/Modal';
import LargeImg from './Components/ImageGallery/LargeImg';
import style from './App.module.css';



export default class App extends Component {
    state = {
        search: '',
        showModal: false,
        largeImageURL: '',
        tags: '',
    };
    // componentDidUpdate(prevProps, prevState) {
        // if (prevState.largeImageURL !== this.state.largeImageURL) {
        //     this.setState({ showModal: true });
        //     // this.setState({largeImageURL: ''})
        // }
        // if (prevState.showModal === true) {
        //     this.setState({largeImageURL: ''})
        // }
    // }

    handleSearchFormSubmit = search => {
        this.setState({ search });
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };
    handleLargeImageURL = (url, tag) => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
        this.setState({ largeImageURL: url, tags: tag });
    };
    reset = () => {
        this.setState({
            search: '',
            showModal: false,
            largeImageURL: '',
            tags: '',
        });
    };

    render() {
        const { showModal, search, largeImageURL, tags } = this.state;
        return (
            <div className={style.App}>
                <Searchbar onSubmitForm={this.handleSearchFormSubmit} />
                <ToastContainer position="top-left" autoClose={2000} />
                <ImageGallery
                    search={search}
                    largeImageURL={this.handleLargeImageURL}
                />
                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <LargeImg LargeImg={largeImageURL} alt={tags} />
                    </Modal>
                )}
            </div>
        );
    }
}
