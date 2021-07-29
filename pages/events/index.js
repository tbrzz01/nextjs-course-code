import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

function EventsHomePage(props) {
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <div>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList events={props.events} />
        </div>
    );
}

export default EventsHomePage;

export function getStaticProps() {
    const events = getAllEvents();
    return {
      props: {
        events,
      },
    };
  }