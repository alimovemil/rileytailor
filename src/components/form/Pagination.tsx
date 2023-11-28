import { FC, useEffect, useState } from "react";
import ArrowRight from "../../container/icons/Arrow-right";
import Button from "./Button";

interface CarouselProps {
    setActivePage: (page: number) => void
    activePage: any
    pages: number
    isLoading?: boolean
}

const Pagination: FC<CarouselProps> = (
    {
        setActivePage,
        activePage,
        pages,
        isLoading = false
    }
) => {
    const [ fontSizes, setFontSizes ] = useState<any>({});

    const handleNumberClick = (number: any) => {
        setActivePage(number);

        scrollToTop();
    };

    const renderNumbers = () => {
        const numbers: any[] = [];

        const visibleCount = 10;

        let start = activePage - Math.floor(visibleCount / 2);

        let end = activePage + Math.floor(visibleCount / 2);

        if (start < 1) {
            start = 1;

            end = Math.min(pages, visibleCount);
        } else if (end > pages) {
            end = pages;
            start = Math.max(1, pages - visibleCount + 1);
        }

        for (let i = start; i <= end; i++) {
            const isActive = i === activePage;
            const isNeighbor = Math.abs(i - activePage) === 1;

            const numberClassName = `carousel-number ${ isActive ? 'carousel-isActive' : '' } ${
                isNeighbor ? 'neighbor' : ''
            }`;

            const style = {
                fontSize: `${ fontSizes[i] }px`,
            };

            numbers.push(
                <Button
                    key={ i }
                    className={ numberClassName }
                    onClick={ () => handleNumberClick(i) }
                    text={
                        <div style={ style }>
                            { i }
                        </div>
                    }
                />
            );
        }

        return numbers;
    };

    const handleNextAndPrev = (type: string) => {
        scrollToTop();

        if (type === 'next') {
            setActivePage(activePage == pages ? activePage : activePage + 1)
        } else if (type === 'prev') {
            setActivePage(activePage == 1 ? activePage : activePage - 1)
        }
    }

    useEffect(() => {
        const calculateFontSizes = () => {
            const fontSizeMap: any = {};
            const maxFontSize = 16; // Maximum font size for the active number

            for (let i = 1; i <= pages; i++) {
                const distance = Math.abs(i - activePage);

                fontSizeMap[i] = Math.max(maxFontSize - distance, 10);
            }

            setFontSizes(fontSizeMap);
        };

        calculateFontSizes();
    }, [ activePage ]);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="carousel">
            <Button
                loading={ isLoading }
                className='carousel-btn carousel-prev'
                onClick={ () => handleNextAndPrev('prev') }
                text={(
                    <div>
                        <ArrowRight
                            color={ activePage == 1 ? 'grey' : 'white' }
                        />
                    </div>
                )}
            />

            <div className='carousel-numbers'>
                { renderNumbers() }
            </div>

            <Button
                loading={ isLoading }
                className={ 'carousel-btn carousel-next' }
                onClick={ () => handleNextAndPrev('next') }
                text={(
                    <div>
                        <ArrowRight
                            color={ activePage == pages ? 'grey' : 'white' }
                        />
                    </div>
                )}
            />
        </div>
    )
}

export default Pagination;

